const router = require("express").Router();

const taskRouter = require('./task');
const inputRouter = require('./input');
const resultRouter = require('./results');
const scriptRouter = require('./script');

router.use('', taskRouter);
router.use('', inputRouter);
router.use('', resultRouter);
router.use('', scriptRouter);

router.get("/health", async (req, res) => {
    res.send();
});


module.exports = router;