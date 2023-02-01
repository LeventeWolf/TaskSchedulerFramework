import React from "react";
import Axios from "axios";

export function StartTasks({workers}) {

    async function startTasks()  {
        await Axios.post('http://localhost:3001/start-tasks', {workers});
    }

    return (
        <button onClick={startTasks} type="button" className="btn btn-outline-success p-3">
            Start tasks
        </button>
    )
}
