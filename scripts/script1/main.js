import exec from "await-exec";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async function main(input) {
    const repositoryName = input.split('/').slice(-2)[0];

    const result = await exec(`du -sh results/${repositoryName}`);
    await delay(2000);
    return `File size: ${result}`
}
