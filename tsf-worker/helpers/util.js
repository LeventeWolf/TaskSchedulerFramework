import axios from "axios";

export async function getTask() {
    try {
        const response = await axios.get('http://localhost:3001/task');
        return response.data;
    } catch (e) {
        console.log('Cannot get task');
        console.log(e);
    }
}

export function millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}