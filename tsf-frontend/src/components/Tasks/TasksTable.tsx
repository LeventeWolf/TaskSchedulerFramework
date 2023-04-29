import React, {useEffect} from "react";
import {Columns, Rows, updateRepository, Table} from "../Templates/Table";
import {useDispatch, useSelector} from "react-redux";
import {fetchRepositories, destroyRepositories} from "../../redux/actions/rowsActions";
import { RootState } from "../../redux/store";

export function TasksTable({ws}: any) {
    const dispatch = useDispatch();
    const rows = useSelector((state: RootState) => state.rows)

    useEffect(() => {
        dispatch(fetchRepositories('http://localhost:3001/api/generated-tasks'))

        return () => {dispatch(destroyRepositories())};
    }, []);

    ws.onmessage = function (ev: any) {
        const response = JSON.parse(ev.data);
        if (response.to !== 'Task') return;

        console.log(response);

        updateRepository(rows, response, dispatch)
    };

    return (
        <Table>
            <Columns/>
            <Rows/>
        </Table>
    );
}