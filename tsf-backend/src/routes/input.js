const router = require("express").Router();

const InputRepository = require("../repository/input.repository");

router.post("/input/init", async (req, res) => {
    await InputRepository.initInputs();

    res.status(200).send({message: 'Initialized database with 100 inputs!'});
})

router.get("/api/all-inputs", async (req, res) => {
    const repositories = await InputRepository.getAll();
    const rows = makeRows(repositories);

    return res.status(200).send(rows);

    function makeRows(inputs) {
        const result = []

        inputs.forEach(input => {
            const row = {
                type: 'Repository',
                content: input
            }

            result.push(row);
        });

        return result
    }
});

router.post("/api/update-run", async (req, res) => {
    try {
        await InputRepository.updateRunById(req.body._id, req.body.run)
    } catch (e) {
        console.log(e.toString())
        return res.status(500).send(e.toString());
    }

    return res.status(200).send();
});

router.post("/api/update-script", async (req, res) => {
    try {
        const input = await InputRepository.updateScriptById(req.body._id, req.body.script);
        res.status(200).send(input);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.toString());
    }

    return res.status(200).send();
});

router.post("/api/update-priority", async (req, res) => {
    try {
        await InputRepository.updatePriorityById(req.body._id, req.body.priority);
    } catch (e) {
        console.log(e.toString())
        return res.status(500).send(e.toString());
    }

    return res.status(200).send();
});

router.post("/create-input", async (req, res) => {
    try {
        await InputRepository.create(req.body.input);
        return res.status(200).send();
    } catch (e) {
        console.log(e.toString())
        return res.status(500).send(e.toString());
    }
});

router.post("/Input", async (req, res) => {
    try {
        await InputRepository.updateById(req.body._id, req.body.input);
        return res.status(200).send();
    } catch (e) {
        console.log(e.toString())
        return res.status(500).send(e.toString());
    }
});


module.exports = router;
