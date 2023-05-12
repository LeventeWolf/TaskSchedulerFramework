import React, {useEffect} from "react";
import {Columns, Rows, Table} from "../Templates/Table";
import {destroyInputs, fetchInputs} from "../../redux/actions/rowsActions";
import {useDispatch} from "react-redux";
import Globals from "../../globals/globals";
import Axios from "axios";

export function RunTable() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchInputs(`http://localhost:3001/api/all-inputs`));

        Axios.get('http://localhost:3001/api/scripts')
            .then((result) => {
                Globals.scripts = result.data.scripts;
            })
            .catch(response => {
                console.log(response)
            });

        return () => {
            dispatch(destroyInputs())
        };
    }, []);


    return (
        <Table>
            <Columns/>
            <Rows/>
        </Table>
    );
}
