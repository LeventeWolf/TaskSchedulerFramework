import React from "react";
import {Row} from "./Table";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import { setRows } from "../../redux/actions/rowsActions";


export const TableHeaderCheckbox: React.FC = () => {
    const rows = useSelector((state: RootState) => state.rows);
    const dispatch = useDispatch();

    /**
     * On All CheckBox Click in the Header update all the repository's run property
     *
     */
    function allCheckboxUpdate(event: any) {
        // TODO changes to Cookie instead of Database
        const prevRows = [...rows];
        const repositories = prevRows.filter((row: Row) => row.type === 'Repository');

        event.target.checked ? selectAllRepositories() : unSelectAllRepositories();

        dispatch(setRows(prevRows))

        function selectAllRepositories() {
            // console.log('Selecting all repositories');
            // @ts-ignore
            repositories.forEach(repository => changeRepositoryRunTo(repository, 1))

        }

        function unSelectAllRepositories() {
            // console.log('UnSelecting all repositories');
            // @ts-ignore
            repositories.forEach(repository => changeRepositoryRunTo(repository, 0))
        }

        function changeRepositoryRunTo(repository: Row, value: number) {
            repository.content.run = value
        }
    }

    return (
        <input style={{transform: 'scale(1.5)'}} type={'checkbox'}
               onClick={allCheckboxUpdate}/>
    );
}
