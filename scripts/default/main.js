import exec from "await-exec";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async function main(input) {
    await exec(`cd results && git clone ${input}`);
    await delay(2000);
    return 'Git clone successful!'
}

// Get input length
// export default async function main(input) {
//         await delay(Math.random() * 10000);
//         return "The length of the input is: " + input.length;
// }

// Get repo stars
// import axios from "axios";
//
// export default async function main(input) {
//     const stars = await getStars(input);
//     return `Number of stars on this repository: ${stars}`;
// }
//
// async function getStars(repositoryUrl) {
//     let split = repositoryUrl.substring(19, repositoryUrl.length).split("/");
//     const [username, repositoryName, ,] = split;
//
//     const url = `https://api.github.com/repos/${username}/${repositoryName}`;
//     try {
//         const response = await axios.get(url);
//         return response.data.stargazers_count;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }
