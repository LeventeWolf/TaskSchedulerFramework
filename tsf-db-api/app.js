require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const restify = require('express-restify-mongoose');
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(methodOverride());

const {Input, Task} = require('./models');

const connect = require('./connection');

connect();

restify.serve(router, Input);
restify.serve(router, Task);

app.get('/health', async (req, res) => {
    res.send({ numberOfInput: await Input.count({}) });
});

app.use(router);

app.listen(10010, () => {
    console.log(`⚡ [server] DB-API listening on port ${10010}`);
});