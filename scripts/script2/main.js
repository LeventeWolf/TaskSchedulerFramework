import exec from "await-exec";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async function main(input) {
    await exec(`cd results && git clone ${input}`);
    await delay(2000);
    return 'Git clone successful!'
}
