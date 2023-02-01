import {StopWatch} from "stopwatch-node";
import axios from "axios";
import {millisToMinutesAndSeconds} from "./util.js";
import mainScript from "../scripts/main.js";
import postScript from "../scripts/post.js";

const stopWatch = new StopWatch('sw');

export async function workOnTask(task) {
    const input = task.content.input;
    stopWatch.isRunning() ? stopWatch.stop() : stopWatch.start(input);

    console.log(`Started working on input: ${input}`);

    try {
        await runTask(input, mainScript, 'Main');
        await runTask(input, postScript, 'Post');

        await sendTaskStatus({input, status: 'Finished'});
    } catch (e) {

    } finally {
        if (stopWatch.isRunning()) stopWatch.stop();
    }
}


async function runTask(input, callback, name) {
    try {
        await sendTaskStatus({input, status: `Running... ${name}`});
        const result = await callback(input);
        await sendTaskStatus({input, result});
    } catch (e) {
        await sendTaskStatus({input, status: `Error ${name}`, result: e.message});
        throw e;
    }
}

async function sendTaskStatus(response) {
    let data = {
        from: 'worker_1',
        input: response.input,
    }

    if (response.result) data.note = response.result;
    if (response.time) data.time = response.time;
    if (response.status) data.status = response.status;

    // millisToMinutesAndSeconds(stopWatch.getTotalTime())

    await axios.post('http://localhost:3001/api/generated-tasks-updater', data);
}
