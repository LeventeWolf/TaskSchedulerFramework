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

    const directoryRow: any = {
        type: 'Directory',
        content: directory,
    }

    return (
        <tr className="directory" style={{maxHeight: '10px', fontStyle: 'normal'}}>
            <td />
            <td style={{paddingLeft: 30}}>
                <DirectoryDelete directory={directoryRow} repository={repository}/>
                <Link to={`/results/${repository.name}/${directory.date}`} className="date-link">
                    {directory.date.split('T')[0]} {directory.date.split('T')[1].split('.')[0]}
                </Link>
            </td>
            <td className="text-center">{directory.script ?? '-'}</td>
            <td className="text-center">{directory.priority ?? '-'}</td>
            {/*<td className="text-center"> /!* Active Eye-Icon *!/*/}
            {/*    <DirectoryActivate directory={directoryRow} activateURL={activateURL} repository={repository}/>*/}
            {/*</td>*/}
            <td className="text-center">{directory.status ?? '-'}</td>
            <td className="text-center">{directory.time ? directory.time + ' s' : '-'}</td>
            <td>{directory.result} </td>
            <td/>
        </tr>
    )

}