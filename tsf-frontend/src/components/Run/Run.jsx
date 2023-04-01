import React from 'react';
import {GenerateTasks} from "./GenerateTasks";
import {RunTable} from "./RunTable";
import {Footer} from '../Styles/TableFooter.style';

// Styles
import {ButtonStyle} from "../Styles/GenerateButton.style";
import '../../style/tableStyle.sass';

export default function Run() {

    return (
        <div id="main">
            <RunTable/>

            <Footer>
                <ButtonStyle>
                    <GenerateTasks/>
                </ButtonStyle>
            </Footer>
        </div>
    )
}
