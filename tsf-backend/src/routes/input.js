const router = require("express").Router();

const InputDbApiService = require("../services/db/input-db.service");

router.post("/input/init", async (req, res) => {
    await InputDbApiService.initInputs();

    res.status(200).send({message: 'Initialized database with 100 inputs!'});
})

router.get("/api/all-repositories", async (req, res) => {
    const repositories = await InputDbApiService.getAll();
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

router.post("/api/update-run", async (req, res) => {
    try {
        await InputDbApiService.updateRunById(req.body._id, req.body.run)
    } catch (e) {
        console.log(e.toString())
        return res.status(400).send(e.toString());
    }

    return res.status(200).send();
});

router.post("/api/update-script", async (req, res) => {
    try {
        const input = await InputDbApiService.updateScriptById(req.body._id, req.body.script);
        res.status(200).send(input);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.toString());
    }

    return res.status(200).send();
});

router.post("/api/update-priority", async (req, res) => {
    try {
        await InputDbApiService.updatePriorityById(req.body._id, req.body.priority);
    } catch (e) {
        console.log(e.toString())
        return res.status(400).send(e.toString());
    }

    return res.status(200).send();
});

router.post("/Input", async (req, res) => {
    try {
        await InputDbApiService.updateById(req.body._id, req.body.input);
        return res.status(200).send();
    } catch (e) {
        console.log(e.toString())
        return res.status(500).send(e.toString());
    }
});


module.exports = router;
