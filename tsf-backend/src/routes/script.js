const router = require("express").Router();

const InputDbApiService = require('../repository/input.repository');
const {readScriptFolders} = require("../lib/fileHandler");

router.get("/api/scripts", async (req, res) => {
    try {
        const scripts = readScriptFolders();
        res.status(200).send({scripts});
    } catch (e) {
        console.log(e.toString())
        res.status(500).send(e.toString());
    }
});


module.exports = router;


