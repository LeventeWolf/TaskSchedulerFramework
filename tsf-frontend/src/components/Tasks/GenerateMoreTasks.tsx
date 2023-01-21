import {NavLink} from "react-router-dom";
import React from "react";

export function GenerateMoreTasks() {
    return (
        <NavLink to="/">
            <button type="button" className="btn p-3 btn-outline-info">
                Generate more tasks
            </button>
        </NavLink>
    )
}
