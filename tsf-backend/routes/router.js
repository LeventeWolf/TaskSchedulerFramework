const router = require("express").Router();

const taskRouter = require('./task');
const inputRouter = require('./input');

router.use('', taskRouter);
router.use('', inputRouter);

router.get("/health", async (req, res) => {
    res.send();
});


module.exports = router;