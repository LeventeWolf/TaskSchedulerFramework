import {Repository, RepositoryContent} from "./Repository";
import {DirectoryContent} from "./Directory";
import React, {useEffect} from "react";
import {TableHeaderShowResults} from "./TableHeaderShowResults";
import {TableHeaderCheckbox} from "./TableHeaderCheckbox";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import { setRows } from "../../redux/actions/rowsActions";
import {TableEditor} from "../../lib/tableEditor";
import ApiService from "../../api/api.service";
import Axios from "axios";

// Types

export type RowType = "Repository" | "Directory";

export interface Row {
    type: RowType;
    content: RowContent;
}

export interface RowContent {
    _id: number,
    run: number,
    input: string,
    script: string,
    priority: string,
    time: number,
    name: string,
    status: string,
    date: string,
    note: string,
    active: boolean,
    repositoryName: string,
    isOpen: boolean,
    result: string,

    // States
    directories: Row[];
    setDirectories: any;

    // Methods
    hideDirectories: any;
    showDirectories: any;

}

export interface RepositoryRow extends Row {
    content: RepositoryContent;
}

export interface DirectoryRow extends Row {
    content: DirectoryContent;
}

// Components

export const Columns = () => {
    return (
        <thead>
            <tr>
                <th className="text-center">
                    <TableHeaderCheckbox />
                </th>
                <th>
                    <TableHeaderShowResults />
                    <span>Input (link/path/file/string)</span>
                </th>
                <th className="text-center">Script</th>
                <th className="text-center">Priority</th>
                <th className="text-center">Status</th>
                <th className="text-center">Time</th>
                <th>Result</th>
            </tr>
        </thead>
    )
}

export const Rows = () => {
    const rows = useSelector((state: RootState) => state.rows);

    return (
        <tbody>
        {
            rows?.map((row: Row) => {
                row.content.name = getRepositoryNameFromLink(row.content.input);
                return <Repository key={row.content._id} repository={row.content}/>;
            })
        }
        </tbody>
    );
};

export const Table = (props: any) => {
    return (
        <div id="tableContainer">
            <div id="runTableWrapper">
                <table id="repositoryTable">
                    {props.children}
                </table>
            </div>
        </div>
    );
};

/**
 * Returns the number of checkboxes checked
 * @returns {number}: Number of checked CheckBoxes
 */
export function countCheckboxes(rows: Row[]) {
    return rows.reduce((acc: number, row: Row) => acc + row.content.run, 0);
}

/**
 * Update a repository every attribute, which comes from HCA response
 * @param rows
 * @param response: response from [HCA]
 * @param dispatch
 */
export function updateRepository(rows: Row[], response: any, dispatch: any) {
    let rowsCopy: Row[] = [...rows];
    let filteredRow: Row | undefined = rowsCopy.find((row) => {
        if (row.content.input === response.input) {
            return row;
        }
    });

    if (filteredRow === undefined) {
        console.log(`[UPDATE] Error not found: ws: ${response.name}`);
        return;
    }

    // change all status
    for (let columnKey of Object.keys(response)) {
        if (response[columnKey] === undefined) continue;

        // @ts-ignore
        filteredRow.content[columnKey] = response[columnKey];
    }

    // blinkRepository(filteredRow.content.link);

    dispatch(setRows(rowsCopy));

    const input = {
        _id: filteredRow.content._id,
        input: filteredRow.content.input,
        status: filteredRow.content.status,
        time: filteredRow.content.time,
        result: filteredRow.content.note,
        date: new Date(),
        priority: filteredRow.content.priority,
        script: filteredRow.content.script,
    };
    
    ApiService.updateInput(input);

    const isFinished = response.time;
    if (isFinished) {
        console.log(input.result);
        ApiService.saveTask(input);
    }
}

/**
 * Convert Repository's link to name
 * example: https://github.com/example/exampleRepository/ -> exampleRepository
 * @param link
 */
export function getRepositoryNameFromLink(input: string): string {
    const temp = input.split('/');
    return temp[temp.length - 2];
}