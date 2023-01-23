import React, {useEffect, useState} from 'react';
import {Explorer} from "./Drawer";
import {v4} from 'uuid';
import arrow from '../../../assets/down-arrow.png';
import Axios from "axios";
import FileIcon from "../FileView/FileIcon";
import {useDispatch} from "react-redux";
import {addResult} from "../../../redux/actions/resultActions";
import {setActiveResult} from "../../../redux/actions/activeResultActions";
import {useParams} from "react-router-dom";

type Props = {
    explorer: Explorer
    path: string
}

export const File: React.FC<Props> = ({explorer, path}) => {
    const [expand, setExpand] = useState<boolean>(explorer.isExpanded);
    let updatedPath = path + '/' + explorer.name;
    const {repository, date} = useParams();

    useEffect(() => {
        // console.log(updatedPath)
    }, []);

    function handleToggle() {
        if (repository) updatedPath = 'results' + updatedPath;

        Axios.post(`http://localhost:3001/api/results/directory-content`, {updatedPath})
            .then(response => {
                explorer.items = response.data;
                setExpand(!expand);
            })
            .catch(response => {
                console.log(response);
            });
    }

    if (explorer.isFolder && explorer.items) { // Folder
        return (
            <div>
                <div className="directory-wrap" onClick={handleToggle}>
                    <img className={"directory-arrow"} src={arrow} alt='>'/>
                    <div className={"directory-icon"}/>
                    <span>{explorer.name}</span>
                </div>

                <div style={{display: expand ? "block" : "none", paddingLeft: 15}}>
                    {explorer.items.map((file: Explorer) => {
                        return <File key={v4()} explorer={file} path={updatedPath}/>
                    })}
                </div>
            </div>
        );
    } else {
        return <OtherFile updatedPath={updatedPath} fileName={explorer.name}/>
    }
};


type OtherFileType = {
    updatedPath: string,
    fileName: string
}

const OtherFile: React.FC<OtherFileType> = ( {updatedPath, fileName} ) => {
    const dispatch = useDispatch();
    const {repository, date} = useParams();

    function toggleFileView() {
        if (repository) updatedPath = 'results' + updatedPath;

        dispatch(addResult(updatedPath))
        dispatch(setActiveResult(updatedPath))
    }

    return (
        <div className="file-wrap" onClick={toggleFileView}>
            <FileIcon fileName={fileName}/>
            <span>{fileName}</span>
        </div>
    );
}

export default File;