const router = require("express").Router();

const taskRouter = require('./task');
const inputRouter = require('./input');
const resultRouter = require('./results');

router.use('', taskRouter);
router.use('', inputRouter);
router.use('', resultRouter);

router.get("/health", async (req, res) => {
    res.send();
});


module.exports = router;