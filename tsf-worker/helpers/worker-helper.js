import {StopWatch} from "stopwatch-node";
import axios from "axios";

let mainScript;
let postScript;
let preScript;

async function importModule(scriptFolder) {
    try {
        mainScript = await import(`../scripts/${scriptFolder}/main.js`);
        postScript = await import(`../scripts/${scriptFolder}/post.js`);
        preScript = await import(`../scripts/${scriptFolder}/pre.js`);
    } catch (error) {
        console.error('import failed');
        console.log(error);
    }
}

const stopWatch = new StopWatch('sw');

export async function workOnTask(task) {
    await importModule(task.content.script);

    const input = task.content.input;
    stopWatch.isRunning() ? stopWatch.stop() : stopWatch.start(input);

    console.log(`Started working on input: ${input}`);

    try {
        await runTask(input, preScript.default, 'Pre');
        await runTask(input, mainScript.default, 'Main');
        await runTask(input, postScript.default, 'Post');

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
