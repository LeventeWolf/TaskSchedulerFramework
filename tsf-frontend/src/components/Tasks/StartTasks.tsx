import React from "react";
import Axios from "axios";

export function StartTasks() {
    async function startTasks()  {
        console.log('Starting tasks!');
        await Axios.post('http://localhost:3001/start-tasks');
    }

    return (
        <button onClick={startTasks} type="button" className="btn btn-outline-success p-3">
            Start tasks
        </button>
    )
}
