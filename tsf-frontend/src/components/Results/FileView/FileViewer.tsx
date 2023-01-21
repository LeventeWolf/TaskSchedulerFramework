import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import './fileViewer.sass'
import FileContent from "./FileContent";
import FileTab from "./FileTab";

export const FileViewer = () => {
    const results = useSelector((state: RootState) => state.results);

    if (results.length !== 0) {
        return (
            <div id="file-viewer-wrap">
                <div className="file-header-scroll-wrap">
                    <div className="file-view-header-wrap">
                        {results.map((result: string) => {
                            return <FileTab resultFilePath={result}/>
                        })}
                    </div>
                </div>


                <FileContent/>
            </div>
        );


    } else {
        return (
            <div className="select-file">
                &lt;Select a file&gt;
            </div>
        )
    }
}

export default FileViewer;