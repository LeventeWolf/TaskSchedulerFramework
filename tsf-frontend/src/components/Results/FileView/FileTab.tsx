import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeResult} from "../../../redux/actions/resultActions";
import {RootState} from "../../../redux/store";
import {setActiveResult} from "../../../redux/actions/activeResultActions";
import FileIcon from "./FileIcon";

type FileTabProps = {
    resultFilePath: string
}

type CloseTabProps = {
    resultFilePath: string
}

const CloseTab: React.FC<CloseTabProps> = ( { resultFilePath }) => {
    const dispatch = useDispatch();
    const results = useSelector((state: RootState) => state.results);

    function handleClose() {
        dispatch(removeResult(resultFilePath))

        // TODO: Implement getNeighbour function
        if (results.length >= 1) {
            dispatch(setActiveResult(results[1]));
        }
    }

    return <div onClick={handleClose} className="header-close" >X</div>;
}

export const FileTab: React.FC<FileTabProps> = ({resultFilePath}) => {
    const dispatch = useDispatch();
    const activeResult = useSelector((state: RootState) => state.activeResult);

    const resultFileSplit = resultFilePath.split('/');
    // @ts-ignore
    const resultFileName: string = resultFileSplit.at(-1);
    const displayPath = resultFileSplit[2] + '/' + resultFileSplit[3] + '/' + resultFileName

    function activateTab() {
        dispatch(setActiveResult(resultFilePath))
    }

    const active = resultFilePath === activeResult ? ' active-tab' : ''

    return (
        <div className={"header-tab" + active}>
            <FileIcon fileName={resultFileName}/>
            <span onClick={activateTab} className="file-name">{displayPath}</span>
            <CloseTab resultFilePath={resultFilePath}/>
        </div>
    )
}

export default FileTab;