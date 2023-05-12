import React from "react";
import "../style/guide.sass"

function Guide() {
    return (
        <div id="main">
            <div id="container">
                <h1>Guide</h1>
                <h2>Run</h2>
                <p>Select the inputs which will be included in the analysis by clicking the checkbox</p>
                <p>After that press the `Generate Tasks` button</p>
                <p>You will be redirected to Tasks</p>
                <h2>Tasks</h2>
                <p>To start the tasks select the workers [1-5] and click on Start Tasks </p>
            </div>
        </div>
    );
}

export default Guide;
