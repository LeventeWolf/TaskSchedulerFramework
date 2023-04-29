const router = require("express").Router();
const fileHandler = require("../lib/fileHandler");
const prioritizeTasks = require("../lib/prioritizer");
const {exec} = require("child_process");

const InputRepository = require('../repository/input.repository');
const TaskRepository = require('../repository/task.repository');
const DAO = {};

let generatedRepositories = [];
let taskQueue = [];


// Run

router.get("/db-api/tasks", async (req, res) => {
    const tasks = await InputRepository.getAll();

    return res.status(200).send(tasks);
});

router.post("/api/deleteRepository", async (req, res) => {
    const repositoryName = req.body.repositoryName;
    const directoryName = req.body.directoryName;

    try {
        fileHandler.deleteRepositoryResultDirectory(repositoryName, directoryName, 'results');
    } catch (error) {
        const message = error.toString();
        res.status(200).send(message);
        console.log(message)
    }

    return res.status(200).end();
});

router.post("/api/selected-repositories", async (req, res) => {
    const selectedRepositories = req.body.selectedRepositories;

    try {
        selectedRepositories.forEach(repository => repository.content.status = 'Waiting for worker...')
        generatedRepositories = selectedRepositories;
        taskQueue = prioritizeTasks([...selectedRepositories]);
    } catch (e) {
        console.log(e.toString())
        return res.status(500).send(e.toString());
    }

    return res.status(200).send(selectedRepositories);
});

router.post("/api/activate-directory", async (req, res) => {
    const directory = req.body.directory;

    try {
        const message = await DAO.updateActiveDirectory(directory);

        return res.status(200).send(message).end();
    } catch (e) {
        console.log('[ROUTER]: Error in activating directory');
        console.log(e.toString());

        return res.status(200).send('404 - error while activating directory').end();
    }

});


// Task

router.get("/api/generated-tasks", async (req, res) => {
    return res.status(200).send(generatedRepositories);
});

router.get("/task", async (req, res) => {
    const task = taskQueue.shift();

    return res.status(200).send(task);
});

router.get("/task-queue", async (req, res) => {
    return res.status(200).send(taskQueue);
});

router.post("/Task/save", async (req, res) => {
    const task = req.body;

    delete task.input;
    delete task._id;

    console.log('Task to create')
    console.log(task);

    const savedTask = await TaskRepository.create(task);

    return res.status(200).send({message: 'Task saved successful', task: savedTask});
});

router.get("/tasks/:inputId", async (req, res) => {
    const inputId = req.params.inputId;

    const tasks = await TaskRepository.getTasksByInputId(inputId);

    const rows = makeRows(tasks);

    console.log(rows);

    return res.status(200).send(rows);

    function makeRows(tasks) {
        const result = []

        tasks.forEach(task => {
            task.active = false;

            const row = {
                type: 'Directory',
                content: task,
            }

            result.push(row);
        });

        return result
    }
});



// Table

router.post("/api/update-input", async (req, res) => {
    try {
        await DAO.updateInput(req.body._id, req.body.input);
        return res.status(200).send();
    } catch (e) {
        console.log(e.toString())
        return res.status(400).send(e.toString());
    }
});

router.post("/api/update-cell", async (req, res) => {
    const data = adjustedColumns(req.body)

    try {
        await DAO.updateCellByRepositoryLink(data)
    } catch (e) {
        console.log(e.toString())
        return res.status(400).send(e.toString());
    }

    return res.status(200).send();


    //TODO: convert names to databse column names
    function adjustedColumns(data) {
        data.name = data.name.trim();
        data.column = data.column.toLowerCase();
        return data;
    }
});


// Start tasks

router.post("/start-tasks", async (req, res) => {
    const command = `docker-compose up --scale tsf-worker=${req.body.workers} tsf-worker`

    console.log(`Executing command: ${command}`);
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
})


module.exports = router;
