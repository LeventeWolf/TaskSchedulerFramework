import React from "react";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navigation, Run, Tasks, Guide, Results} from "./components";

import AlertTemplate from 'react-alert-template-basic'
import {transitions, positions, Provider as AlertProvider} from 'react-alert'

import "./style/index.sass";

const options = {
    position: positions.BOTTOM_RIGHT,
    timeout: 5000,
    offset: '5px',
    transition: transitions.FADE
}


export function App() {
    return (
        <AlertProvider template={AlertTemplate} {...options}>
            <Router>
                <Navigation/>

                <Routes>
                    <Route path="/" element={<Run/>}/>
                    <Route path="/tasks" element={<Tasks/>}/>
                    <Route path="/guide" element={<Guide/>}/>
                    <Route path="/results" element={<Results/>}/>
                    <Route path="/results/:repository/" element={<Results/>}/>
                    <Route path="/results/:repository/:date" element={<Results/>}/>
                </Routes>
            </Router>
        </AlertProvider>
    )
}