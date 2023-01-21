import React from "react";
import {DirectoryDelete} from "./DirectoryDelete";
import {DirectoryActivate} from "./DirectoryActivate";
import {RowContent} from "./Table";
import {RepositoryContent} from "./Repository";
import {Link} from "react-router-dom";

export interface DirectoryContent extends RowContent {

}

type Props = {
    directory: DirectoryContent;
    repository: RepositoryContent;
};

export const Directory: React.FC<Props> = ({directory, repository}) => {
    const deleteURL = 'http://localhost:3001/api/deleteRepository';
    const activateURL = 'http://localhost:3001/api/activate-directory'

    const directoryRow: any = {
        type: 'Directory',
        content: directory,
    }

    return <tr className="directory" style={{maxHeight: '10px', fontStyle: 'normal'}}>
        <td/>
        {/* CheckBox */}
        <td style={{paddingLeft: 30}}>
            {/* Delete Icon */}
            <DirectoryDelete directory={directoryRow} deleteURL={deleteURL} repository={repository}/>
            {/* Date */}
            <Link to={`/results/${repository.name}/${directory.date}`} className="date-link">
                <span style={{marginLeft: 10}}>{directory.date}</span>
            </Link>
        </td>
        <td className="text-center"> {/* Active Eye-Icon */}
            <DirectoryActivate directory={directoryRow} activateURL={activateURL} repository={repository}/>
        </td>
        <td className="text-center">{directory.status ?? '-'}</td>
        {/* Status */}
        <td className="text-center">{directory.time ? directory.time + ' s' : '-'}</td>
        {/* Time */}
        <td className="text-center">{directory.scg ?? '-'}</td>
        {/* SCG */}
        <td className="text-center">{directory.dcg ?? '-'}</td>
        {/* DCG */}
        <td className="text-center">{directory.sm ?? '-'}</td>
        {/* SM */}
        <td className="text-center">{directory.dm ?? '-'}</td>
        {/* DM */}
        <td className="text-start">{directory.inject ?? '-'}</td>
        {/* Where to Inject */}
        <td className="text-start text-warning fw-bold">{directory.note}</td>
        {/* Note */}
        <td/>
        {/* Hash */}
    </tr>
}