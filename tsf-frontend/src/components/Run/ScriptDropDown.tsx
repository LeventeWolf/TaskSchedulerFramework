import React, {useEffect, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Axios from "axios";
import {useAlert} from "react-alert";
import {useDispatch} from "react-redux";
import {updateRepository} from "../../redux/actions/rowsActions";
import Globals from '../../globals/globals';

function ScriptDropDown({repository}) {
    const [selectedValue, setSelectedValue] = useState(repository.script);
    const [possibleValues, setPossibleValues] = useState(['default']);
    const alert = useAlert();
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(function() {
            setPossibleValues(Globals.scripts)
        }, 1000);
    }, [])

    function handleDropdownSelect(selectedScript: any) {
        Axios.post('http://localhost:3001/api/update-script', {_id: repository._id, script: selectedScript})
            .then(() => {
                setSelectedValue(selectedScript);
                dispatch(updateRepository(repository))
            })
            .catch(response => {
                console.log(response)
                alert.error('Error occurred!');
            });
    }

    return (
        <Dropdown onSelect={handleDropdownSelect} >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedValue}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {possibleValues.map((script, i) =>
                    <Dropdown.Item key={i} eventKey={script}>{script}</Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ScriptDropDown;