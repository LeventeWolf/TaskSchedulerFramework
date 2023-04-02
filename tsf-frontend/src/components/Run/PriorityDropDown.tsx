import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Axios from "axios";
import {useAlert} from "react-alert";
import {updateRepository} from "../../redux/actions/rowsActions";
import {useDispatch} from "react-redux";

function PriorityDropDown({repository}) {
    const [selectedValue, setSelectedValue] = useState(repository.priority);
    const alert = useAlert();
    const dispatch = useDispatch();

    const backgroundColor = {
        "High": "danger",
        "Medium": "success",
        "Low": "warning",
    }

    function handleDropdownSelect(priority: any) {
        Axios.post('http://localhost:3001/api/update-priority', {_id: repository._id, priority})
            .then(() => {
                setSelectedValue(priority);
                dispatch(updateRepository(repository))
            })
            .catch(response => {
                console.log(response)
                alert.error('Error occurred!');
            });
    }

    return (
        <Dropdown onSelect={handleDropdownSelect}>
            <Dropdown.Toggle variant={backgroundColor[selectedValue]}  id="dropdown-basic">
                {selectedValue}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="High">High</Dropdown.Item>
                <Dropdown.Item eventKey="Medium">Medium</Dropdown.Item>
                <Dropdown.Item eventKey="Low">Low</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default PriorityDropDown;