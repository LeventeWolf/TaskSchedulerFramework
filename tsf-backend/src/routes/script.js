const router = require("express").Router();

const InputDbApiService = require('../services/db/input-db.service');
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



module.exports = router;


