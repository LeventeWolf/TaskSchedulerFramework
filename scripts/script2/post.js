import exec from "await-exec";

export default async function post(input) {
    const repositoryName = input.split('/').slice(-2)[0];
    await exec(`cd results/${repositoryName} && npm install`);
    return 'Npm install ok!'
}