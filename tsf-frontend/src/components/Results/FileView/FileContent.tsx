import React from "react";
import "./fileContent.sass"
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import { ContentCSV, ContentTXT, ContentJSON, ContentDefault } from './Extensions/index'

export const FileContent: React.FC = () => {
    const activeResultPath = useSelector((state: RootState) => state.activeResult);
    const extension = activeResultPath.split('.').at(-1);

    switch (extension) {
        case 'json':
            return <ContentJSON/>
        case 'csv':
            return <ContentCSV/>
        case 'txt':
            return <ContentTXT/>
        default:
            return <ContentDefault extension={extension} />
    }
};


export default FileContent;