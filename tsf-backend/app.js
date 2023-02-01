const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require("path");
const bodyParser = require('body-parser')
const app = express();
const APP_PORT = 3001
const WEBSOCKET_PORT = 8000

const router = require('./routes/router.js');

const WebSocket = require('ws');
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.static(path.join(__dirname, "./")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: false}));
app.use(router)

// TODO: Extract to Router

const mainDAO = require("./dao/main_dao");
const DAO = new mainDAO();

/**
 * Update a [HCA] results to /Tasks
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


/**
 * Update a [HCA] results to /Map
 */
app.post("/api/generated-map-tasks-updater", async (req, res) => {
    console.log(`[SOCKET] Send Map status: Running... `)

    await DAO.updateMapRepository(req.body);

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(req.body));
        }
    });

    return res.status(200).send('ok');
});


app.listen(APP_PORT, () => {
    console.log(`Application Server listening at: http://localhost:${APP_PORT}/`);
});

server.listen(WEBSOCKET_PORT, () => {
    console.log(`WebSocket   Server listening at: http://localhost:${WEBSOCKET_PORT}/`);
});
