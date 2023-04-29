import exec from "await-exec";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async function main(input) {
    await delay(3000);
    return 'Waited 3 seconds!'
}
