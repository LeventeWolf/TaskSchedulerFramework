import axios from 'axios';
import {StopWatch} from "stopwatch-node";
import mainScript from "./scripts/main.js";

async function getTask() {
    try {
        const response = await axios.get('http://localhost:3001/task');
        return response.data;
    } catch (e) {
        console.log('Cannot get task');
        console.log(e);
    }
}


const stopWatch = new StopWatch('sw');

async function workOnTask(task) {
    if (stopWatch.isRunning()) {
        stopWatch.stop();
    } else {
        stopWatch.start(task.content.input);
    }

    let response = {
        from: 'worker_1',
        input: task.content.input,
        status: 'Running...'
    };


    await axios.post('http://localhost:3001/api/generated-tasks-updater', response)
    console.log(`Started working on input: ${task.content.input}`);

    let result;

    response.status = 'Finished'

    try {
        result = await mainScript(task.content.input);
        console.log(`The result of the task is: "${result}"`);
    } catch (e) {
        response.status = 'Error';
        result = e.message;
        console.log(`Error occured!`);
    } finally {
        if (stopWatch.isRunning()) stopWatch.stop();

        await axios.post('http://localhost:3001/api/generated-tasks-updater', {
            ...response,
            note: result,
            time: millisToMinutesAndSeconds(stopWatch.getTotalTime())
        },)
    }


    console.log(`Finished!`);
}

async function main() {
    let task;

    do {
        task = await getTask();
        if (task === '') break;
        await workOnTask(task);
    } while(task !== '');

    console.log('No more tasks!');
}

function millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}


await main();