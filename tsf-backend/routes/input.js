const router = require("express").Router();

const DbApiService = require('../src/services/db/db-api.service');

router.post("/input/init", async (req, res) => {
    await DbApiService.initInputs();

    res.status(200).send({message: 'Initialized database with 100 inputs!'});
})


module.exports = router;
