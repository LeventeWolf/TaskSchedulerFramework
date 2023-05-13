import React, {useEffect, useState} from "react";
import Axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import '../../style/newinput.sass';
import deleteDirectoryIcon from "../../assets/deleteX.png";
import tickIcon from "../../assets/tick.png";
import Globals from "../../globals/globals";

function ScriptDropDown({ scriptSelectedValue, setScriptSelectedValue }) {
    const [possibleValues, setPossibleValues] = useState(['default']);

    function handleDropdownSelect(selectedScript: any) {
        setScriptSelectedValue(selectedScript);
    }

    useEffect(() => {
        setTimeout(function() {
            setPossibleValues(Globals.scripts)
        }, 1000);
    }, [])

    return (
        <Dropdown onSelect={handleDropdownSelect} >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {scriptSelectedValue}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {possibleValues.map((script, i) =>
                    <Dropdown.Item key={i} eventKey={script}>{script}</Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
}

function PriorityDropDown({ dropdownSelectedValue, setDropdownSelectedValue } ) {

    const backgroundColor = {
        "High": "danger",
        "Medium": "success",
        "Low": "warning",
    }

    function handleDropdownSelect(priority: any) {
        setDropdownSelectedValue(priority);
    }

    return (
        <Dropdown onSelect={handleDropdownSelect}>
            <Dropdown.Toggle variant={backgroundColor[dropdownSelectedValue]}  id="dropdown-basic">
                {dropdownSelectedValue}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="High">High</Dropdown.Item>
                <Dropdown.Item eventKey="Medium">Medium</Dropdown.Item>
                <Dropdown.Item eventKey="Low">Low</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}


export const NewInput = ( {isNewInput, setNewInput } ) => {
    const [value, setValue] = useState('');
    const [scriptSelectedValue, setScriptSelectedValue] = useState('default');
    const [dropdownSelectedValue, setDropdownSelectedValue] = useState('Medium');

    function handleChange(event) {
        setValue(event.target.value);
    }

    function addInput() {
        const input = {
            run: 0,
            input: value,
            script: scriptSelectedValue,
            status: 'New',
            priority: dropdownSelectedValue,
            time: ' ',
            result: ' ',
        }

        Axios.post('http://localhost:3001/create-input', {input})
            .then((result) => {

                setNewInput(false);
            })
            .catch(response => {
                console.log(response)
            });
    }

    function deleteResult() {
        setNewInput(false);
    }

    return (
        <div>
            <div className="add-new-task-title">Add new task</div>
            <div className="new-input-container">
                <div className="new-input-wrapper">
                    <input className="new-input" defaultValue="" onChange={handleChange} autoFocus />
                    <ScriptDropDown scriptSelectedValue={scriptSelectedValue} setScriptSelectedValue={setScriptSelectedValue} />
                    <PriorityDropDown dropdownSelectedValue={dropdownSelectedValue} setDropdownSelectedValue={setDropdownSelectedValue} />
                </div>
                <div>
                    <img className="addIcon" src={tickIcon} alt="ok" onClick={addInput}/>
                    <img className="addDeleteIcon" src={deleteDirectoryIcon} alt="del" onClick={deleteResult}/>
                </div>
            </div>
        </div>
    )
}

