import React from "react";
import Axios from "axios";
import {NavLink} from "react-router-dom";
import {RootState} from "../../redux/store";
import {useSelector} from "react-redux";
import {countCheckboxes} from "../Templates/Table";

export const GenerateTasks = () => {
    const rows = useSelector((state: RootState) => state.rows);
    const localStorage = window.localStorage;

    /**
     * Generate tasks to analyse the selected Repositories
     */
    function generateTasks() {
        const repositories = rows.filter((row: any) => row.type === 'Repository');
        const selectedRepositories = repositories.filter((repository: any) => repository.content.run);

        Axios.post('http://localhost:3001/api/selected-repositories', {selectedRepositories})
            .then(() => {
                console.log('[TASK] Selected Repositories sent to server!');
                localStorage['Tasks'] = JSON.stringify(selectedRepositories);
            })
            .catch(response => {
                console.log('[TASK] Error while sending selected Repositories to server!');
                console.log(response);
            });
    }

    return (
        <NavLink to="/tasks">
            <button type="button" className="btn p-3 btn-outline-info" onClick={generateTasks}>
                Generate tasks {countCheckboxes(rows) || null}
            </button>
        </NavLink>
    )
}