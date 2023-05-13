import React from "react";

export const AddNewTask = ( {isNewInput, setNewInput } ) => {

    function addNewTask() {

        setNewInput(true);


    }


    return (
        <button type="button" className="btn p-3 btn-outline-info" onClick={addNewTask}>
           +
        </button>
    )
}