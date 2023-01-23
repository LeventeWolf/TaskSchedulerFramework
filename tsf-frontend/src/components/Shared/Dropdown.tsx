import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function PriorityDropDown() {
    const [selectedValue, setSelectedValue] = useState('Medium');

    const backgroundColor = {
        "High": "danger",
        "Medium": "success",
        "Low": "warning",
    }

    function handleDropdownSelect(selectedPriority: any) {
        setSelectedValue(selectedPriority);
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