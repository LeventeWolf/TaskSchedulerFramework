const router = require("express").Router();
const mainDAO = require("../dao/main_dao");
const fileHandler = require("../lib/fileHandler");
const prioritizeTasks = require("../lib/prioritizer");
const {readScriptFolders} = require("../lib/fileHandler");

const DbApiService = require('../src/services/db/db-api.service');
const {exec} = require("child_process");
const DAO = new mainDAO();

let generatedRepositories = [];
let taskQueue = [];

// General

router.post("/api/show-results-directories", async (req, res) => {
    console.log('[ROUTER] showing run results')

    try {
        const directories = fileHandler.readFolders(req.body.repository, req.body.directoriesPath);
        const rows = makeRows(directories);

        return res.status(200).send(rows);
    } catch (error) {
        res.statusMessage = error.toString();
        res.status(400).end();
    }

    function makeRows(directoryNames) {
        const result = []

        directoryNames.forEach(directory => {
            directory.active = false;

            const row = {
                type: 'Directory',
                content: directory,
            }

            result.push(row);
        });

        return result
    }
});

// Run

/**
 * Init Run.jsx with all run repositories from MariaDB
 */
router.get("/api/all-repositories", async (req, res) => {
    const repositories = await DAO.getAllRepositories();
    const rows = makeRows(repositories);

    return res.status(200).send(rows);

    function makeRows(repositories) {
        const result = []

        repositories.forEach(repository => {
            const row = {
                type: 'Repository',
                content: repository
            }

            result.push(row);
        });

        return result
    }
});

router.get("/db-api/tasks", async (req, res) => {
    const tasks = await DbApiService.getAllInputs();

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

router.post("/api/update-run", async (req, res) => {
    try {
        await DAO.updateRunByRepositoryLink(req.body.name, req.body.run)
    } catch (e) {
        console.log(e.toString())
        return res.status(400).send(e.toString());
    }

    return res.status(200).send();
});

router.post("/api/update-priority", async (req, res) => {
    try {
        await DAO.updatePriorityByRepositoryLink(req.body.input, req.body.priority)
    } catch (e) {
        console.log(e.toString())
        return res.status(400).send(e.toString());
    }

    return res.status(200).send();
});

router.post("/api/update-script", async (req, res) => {
    try {
        await DAO.updateScriptByRepositoryLink(req.body.input, req.body.script)
    } catch (e) {
        console.log(e.toString())
        return res.status(400).send(e.toString());
    }

    return res.status(200).send();
});

router.get("/api/scripts", async (req, res) => {
    try {
        const scripts = readScriptFolders();
        res.status(200).send({scripts});
    } catch (e) {
        console.log(e.toString())
        res.status(500).send(e.toString());
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

// Table

router.post("/api/update-input", async (req, res) => {
    try {
        await DAO.updateInput(req.body.id, req.body.input);
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


// Results
router.get("/api/results/:repository/:date", async (req, res) => {
    const repository = req.params.repository;
    const date = req.params.date;

    console.log(`setting explorer for: ${repository}/${date}`)

    try {
        const results = fileHandler.getRepositoryResult(repository, date);
        // console.log(results)
        return res.status(200).send(results);
    } catch (e) {
        console.log(e.toString())
        return res.status(400).send(e.toString());
    }

});


router.get("/api/results", async (req, res) => {
    try {
        const results = fileHandler.getAllResults();
        return res.status(200).send(results);
    } catch (e) {
        console.log(e.toString())
        return res.status(400).send(e.toString());
    }
});


router.post("/api/results/directory-content", async (req, res) => {
    try {
        const results = fileHandler.getDirectoryFiles(req.body.updatedPath);
        return res.status(200).send(results);
    } catch (e) {
        console.log(e.toString())
        return res.status(400).send(e.toString());
    }
})


// File extensions

router.post("/api/file/json", async (req, res) => {
    try {
        const results = fileHandler.readJSON(req.body.jsonPath);
        return res.status(200).send(results);
    } catch (e) {
        console.log(e.toString())
        return res.status(400).send(e.toString());
    }
})

router.post("/api/file/csv", async (req, res) => {
    try {
        const result = await fileHandler.readCsv(req.body.csvPath);
        return res.status(200).send(result);
    } catch (e) {
        console.log(e.toString())
        return res.status(400).send(e.toString());
    }
})

// Start tasks

router.post("/start-tasks", async (req, res) => {
    const {exec} = require("child_process");

    const command = `docker-compose up --scale tsf-worker=${req.body.workers} tsf-worker`

    console.log(command);
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
