import {getTask} from "./helpers/util.js";
import {workOnTask} from "./helpers/worker-helper.js";

async function main() {
    let task;

    do {
        task = await getTask();
        if (task === '') break;
        await workOnTask(task);
    } while(task !== '');

    console.log('No more tasks!');
}


await main();