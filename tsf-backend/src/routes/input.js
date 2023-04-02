const router = require("express").Router();

const InputDbService = require('../services/db/input-db.service');

router.post("/input/init", async (req, res) => {
    await InputDbService.initInputs();

    res.status(200).send({message: 'Initialized database with 100 inputs!'});
})

router.get("/api/all-repositories", async (req, res) => {
    const repositories = await InputDbService.getAll();
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

router.post("/api/update-priority", async (req, res) => {
    try {
        await InputDbService.updatePriorityById(req.body._id, req.body.priority);
    } catch (e) {
        console.log(e.toString())
        return res.status(400).send(e.toString());
    }

    return res.status(200).send();
});


module.exports = router;
