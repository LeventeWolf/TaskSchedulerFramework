import React, {useState} from 'react';
import {GenerateTasks} from "./GenerateTasks";
import {RunTable} from "./RunTable";
import {Footer} from '../Styles/TableFooter.style';

// Styles
import {ButtonStyle} from "../Styles/GenerateButton.style";
import '../../style/tableStyle.sass';
import {AddNewTask} from "./AddNewTask";
import {NewInput} from "./NewInput";

export default function Run() {
    const [isNewInput, setNewInput] = useState(false);


    return (
        <div id="main">

            {
                isNewInput ? <NewInput isNewInput={isNewInput} setNewInput={setNewInput}  /> : <></>
            }


            <RunTable/>

            <Footer>
                <ButtonStyle>
                    <AddNewTask isNewInput={isNewInput} setNewInput={setNewInput}  />
                </ButtonStyle>
            </Footer>
            <Footer>
                <ButtonStyle>
                    <GenerateTasks/>
                </ButtonStyle>
            </Footer>
        </div>
    )
}
