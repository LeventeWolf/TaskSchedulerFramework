import React, {useState} from "react";
import {GenerateMoreTasks} from "./GenerateMoreTasks";
import {TasksTable} from "./TasksTable";
import {Footer} from "../Styles/TableFooter.style";
import {ButtonStyle} from "../Styles/GenerateButton.style";
import '../../style/tableStyle.sass';
import {StartTasks} from "./StartTasks";
import WorkersDropdown from "../Shared/WorkersDropdown";

const ws = new WebSocket('ws://localhost:8000/')

ws.onopen = function () {
    console.log('[TASKS] Connected to: ' + ws.url);
};

export default function Tasks() {
    const [selectedValue, setSelectedValue] = useState(1);

    return (
        <div id="main">
            <TasksTable ws={ws}/>

            <Footer>
                {/*<StopTasksWrapper>*/}
                {/*    <StopTasks />*/}
                {/*</StopTasksWrapper>*/}

                <ButtonStyle>
                    <GenerateMoreTasks/>
                </ButtonStyle>

                <ButtonStyle>
                    <StartTasks workers={selectedValue} />
                </ButtonStyle>

                <WorkersDropdown selectedValue={selectedValue} setSelectedValue={setSelectedValue} />

                {/*<DeleteTasksWrapper>*/}
                {/*    <DeleteTasks />*/}
                {/*</DeleteTasksWrapper>*/}
            </Footer>
        </div>
    );
}
