import React from "react";
import {GenerateMoreTasks} from "./GenerateMoreTasks";
import {TasksTable} from "./TasksTable";
import {Footer} from "../Styles/TableFooter.style";
import {ButtonStyle} from "../Styles/GenerateButton.style";
import '../../style/tableStyle.sass';
import {StartTasks} from "./StartTasks";

const ws = new WebSocket('ws://localhost:8000/')

ws.onopen = function () {
    console.log('[TASKS] Connected to: ' + ws.url);
};

export default function Tasks() {
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
                    <StartTasks/>
                </ButtonStyle>

                {/*<DeleteTasksWrapper>*/}
                {/*    <DeleteTasks />*/}
                {/*</DeleteTasksWrapper>*/}
            </Footer>
        </div>
    );
}
