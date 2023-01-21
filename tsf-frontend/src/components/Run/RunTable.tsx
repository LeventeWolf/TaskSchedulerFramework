import React, {useEffect} from "react";
import {Columns, Rows, Table} from "../Templates/Table";
import {destroyRepositories, fetchRepositories} from "../../redux/actions/rowsActions";
import {useDispatch} from "react-redux";

export function RunTable() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchRepositories(`http://localhost:3001/api/all-repositories`));

        return () => {
            dispatch(destroyRepositories())
        };
    }, []);


    return (
        <Table>
            <Columns/>
            <Rows/>
        </Table>
    );
}
