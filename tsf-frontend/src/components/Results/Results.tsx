import React from "react";
import '../../style/results.sass';
import Drawer from "./Drawer/Drawer";
import FileViewer from "./FileView/FileViewer";

type Props = {
    url: string;
};


export const Results: React.FC<Props> = ( {url} ) => {
    return (
        <div id="main">
            <div id="results-wrapper">
                <Drawer />
                <FileViewer />
            </div>
        </div>
    );
}

export default Results;
