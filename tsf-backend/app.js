const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require("path");
const bodyParser = require('body-parser')
const expressWinston = require('express-winston');
const logger = require('./shared/logger/logger');

const app = express();
const APP_PORT = 3001
const WEBSOCKET_PORT = 8000

const router = require('./src/routes/router.js');

const WebSocket = require('ws');
const ErrorHandler = require("./shared/error/error.handler");
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

const errorHandler = new ErrorHandler();

app.use(expressWinston.logger(logger));
app.use(expressWinston.errorLogger(logger))

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.static(path.join(__dirname, "./")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: false}));
app.use(router)


/**
 * Update a [TSF] results to /Tasks
 */
app.post("/api/generated-tasks-updater", async (req, res) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            req.body.to = 'Task';
            client.send(JSON.stringify(req.body));
        }
    });

    return res.status(200).send('ok');
});


app.use((err, req, res, next) => {
    errorHandler.handleError(err, res);
})

app.listen(APP_PORT, () => {
    console.log(`Application Server listening at: http://localhost:${APP_PORT}/`);
});

server.listen(WEBSOCKET_PORT, () => {
    console.log(`WebSocket   Server listening at: http://localhost:${WEBSOCKET_PORT}/`);
});
