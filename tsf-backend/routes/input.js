const router = require("express").Router();

const DbApiService = require('../src/services/db/db-api.service');

router.post("/input/init", async (req, res) => {
    await DbApiService.initInputs();

    res.status(200).send({message: 'Initialized database with 100 inputs!'});
})

router.get("/api/all-repositories", async (req, res) => {
    const repositories = await DbApiService.getAllInputs();
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


module.exports = router;
