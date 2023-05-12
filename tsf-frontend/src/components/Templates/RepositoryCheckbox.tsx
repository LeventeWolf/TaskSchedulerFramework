import React from "react";
import Axios from "axios";
import {RepositoryContent} from "./Repository";
import {useAlert} from "react-alert";
import {useDispatch} from "react-redux";
import {updateInput} from "../../redux/actions/rowsActions";

type Props = {
    repository: RepositoryContent;
    database: string;
};

export const RepositoryCheckbox: React.FC<Props> = ({repository, database}) => {
    const dispatch = useDispatch();
    const alert = useAlert();

    /**
     * When we click on a checkbox, update the repository run property.
     */
    function checkboxUpdate() {
        changeRunToOpposite(repository)

        let url: string = '';

        if (database === 'Repositories') url = 'http://localhost:3001/api/update-run';

        Axios.post(url, {_id: repository._id, run: repository.run})
            .then(() => {
                dispatch(updateInput(repository))
            })
            .catch(response => {
                console.log(response)
                alert.error('Error occurred!');
            });

        function changeRunToOpposite(repository: RepositoryContent) {
            repository.run = (repository.run + 1) % 2
        }
    }

    return (
        <input type={'checkbox'} checked={Boolean(repository.run)}
               style={{transform: 'scale(1.5)'}}
               onChange={checkboxUpdate}
        />
    );
}