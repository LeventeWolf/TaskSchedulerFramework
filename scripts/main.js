const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async function mainScript(input) {
    try {
        await delay(Math.random() * 10000);
        return "The length of the input is: " + input.length;
    } catch (e) {
        throw e;
    }
}


// import axios from "axios";
//
// export default async function main(input) {
//     try {
//         const stars = await getStars(input);
//         return stars;
//     } catch (e) {
//         throw e;
//     }
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

