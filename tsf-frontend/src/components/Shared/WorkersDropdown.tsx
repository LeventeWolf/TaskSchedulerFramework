import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function WorkersDropdown({ selectedValue, setSelectedValue }) {

    function handleDropdownSelect(selectedPriority: any) {
        setSelectedValue(selectedPriority);
    }

    return (
        <Dropdown onSelect={handleDropdownSelect}>
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                Workers {selectedValue}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">4</Dropdown.Item>
                <Dropdown.Item eventKey="5">5</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default WorkersDropdown;