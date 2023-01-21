import React from "react";
import "../style/guide.sass"

function Guide() {
    return (
        <div id="main">
            <div id="container">
                <h1>Guide</h1>
                <h2>Run</h2>
                <p>Select the repositories which will be included in the hybrid analysis by clicking the checkbox</p>
                <p>After that press the `Generate Tasks` button</p>
                <p>You will be redirected to Tasks</p>
                <h2>Tasks</h2>
                <p>To start hybrid analysis run the following command </p>
                <span style={{background: 'rgba(95,94,94,0.56)', padding: 5}}>python3 hybrid-hca-main.py hmf</span>
                <h2>Map</h2>
                <p>To start mapping run the following command </p>
                <span style={{background: 'rgba(95,94,94,0.56)', padding: 5}}>python3 hybrid-hca-main.py hmf map</span>
            </div>
        </div>
    );
}

export default Guide;
