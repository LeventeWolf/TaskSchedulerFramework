const fileHandler = require("../lib/fileHandler");
const router = require("express").Router();

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
        return res.status(500).send(e.toString());
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




module.exports = router;
