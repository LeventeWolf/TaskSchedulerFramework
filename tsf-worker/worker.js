import axios from 'axios';
import {StopWatch} from "stopwatch-node";

async function getTask() {
    try {
        const response = await axios.get('http://localhost:3001/task');
        return response.data;
    } catch (e) {
        console.log('Cannot get task');
        console.log(e);
    }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const stopWatch = new StopWatch('sw');

async function main() {
    const task = await getTask();

    if (task === '') {
        console.log('[WORKER_1] No more tasks!');
        return;
    }

    stopWatch.start(task.content.input);

    let response = {
        from: 'worker_1',
        input: task.content.input
    };
    await axios.post('http://localhost:3001/api/generated-tasks-updater', {...response, status: 'Running...'},)
    console.log(`[WORKER_1] Started working on input: ${task.content.input}`);

    // main();
    await delay(2000);

    stopWatch.stop();

    await axios.post('http://localhost:3001/api/generated-tasks-updater', {
        ...response,
        status: 'Finished',
        time: millisToMinutesAndSeconds(stopWatch.getTotalTime())
    },)
    console.log(`[WORKER_1] Finished!`);
}

function millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}


await main();