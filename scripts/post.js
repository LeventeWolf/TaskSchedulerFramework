import exec from "await-exec";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async function post(input) {
    await exec(`cd results/node-floody && npm install`);
    return 'Npm install ok!'
}