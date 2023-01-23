import React, {useState} from "react";
import {conditionalFormatters} from "../../lib/conditionalFormatter";
import {DirectoryRow, Row, RowContent} from "./Table";
import {RepositoryShowResults} from "./RepositoryShowResults";
import {RepositoryCheckbox} from "./RepositoryCheckbox";
import {Directory, DirectoryContent} from "./Directory";
import {v4} from "uuid";
import Axios from "axios";
import {useAlert} from "react-alert";
import PriorityDropDown from "../Shared/Dropdown";

// Types
export interface RepositoryContent extends RowContent {

}

export type Props = {
    repository: RepositoryContent;
}

/**
 * Represents a Row in the Repository Table
 * @param repository: Content that we want to display in the row
 * @constructor
 */
export const Repository: React.FC<Props> = ({repository}) => {
    const alert = useAlert();

    const [directories, setDirectories] = useState([]);

    repository.directories = directories;
    repository.setDirectories = setDirectories;
    repository.hideDirectories = hideDirectories;
    repository.showDirectories = showDirectories;

    function hideDirectories() {
        repository.isOpen = false;
        repository.setDirectories([]);
    }

    function showDirectories() {
        repository.isOpen = true;
        Axios.post('http://localhost:3001/api/show-result-directories', {
            'from': 'Run',
            'action': 'showResultDirectories',
            directoriesPath: 'results',
            repository,
        }).then(response => {
            showResults(response.data)
        }).catch(error => {
            alert.error('Error occurred!');
        });

        /**
         * Fill the rows with the directories that comes from Backend
         * @param response: Response from server containing the requested repository data
         */
        function showResults(response: DirectoryRow[]) {
            const responseDirectories: DirectoryRow[] = response;

            appendResultsAfterRepository(repository);

            function appendResultsAfterRepository(repository: RepositoryContent) {
                for (const directory of responseDirectories) {
                    const directoryRow = convertDirectoryNameToRow(directory.content) as Row

                    if (repository.date === directory.content.date) {
                        directory.content.active = true;
                    }

                    repository.setDirectories((prevDirectories: Row[]) => [...prevDirectories, directoryRow]);
                }

            }

            function convertDirectoryNameToRow(directoryContent: DirectoryContent) {
                return {
                    type: 'Directory',
                    content: directoryContent
                };
            }
        }
    }

    return (
        <>
            {/* @ts-ignore */}
            <tr style={{maxHeight: '10px'}} bgcolor={conditionalFormatters[repository.status]} className="repository">
                <td className='text-center' >
                    <RepositoryCheckbox repository={repository} database="Repositories"/>
                </td>
                <td>
                    <RepositoryShowResults repository={repository}
                                           directories={directories}
                                           setDirectories={setDirectories}
                    />
                    <a href={repository.input} target="_blank">{repository.input}</a>
                </td>
                <td className="text-center test-fw"><PriorityDropDown /></td>
                <td className="text-center">{repository.status}</td>
                <td className="text-center">{repository.time ? repository.time + ' s' : ''}</td>
                <td>{repository.note}</td>
            </tr>

            {directories?.map((directory: any) => {
                return <Directory directory={directory.content} repository={repository}
                                  key={repository.input + '@' + directory.content.date}/>
            })}
        </>
    );
};

/**
 * Find a repository's all result directory names
 * @param rows all rows
 * @param link The link of the repository (key)
 * @returns list of directory names
 */
export function getRepositoryAllResultDirectories(rows: Row[], link: string): DirectoryRow[] {
    const result: DirectoryRow[] = [];

    for (let i = 0; i < rows.length; i++) {
        if (rows[i].type === 'Repository' && rows[i].content.input === link) {
            // if last row does not have results break
            if (i === rows.length - 1) return result;

            for (let j = i + 1; j < rows.length; j++) {
                if (rows[j].type !== 'Directory') return result;

                result.push(rows[j]);
            }
        }
    }

    return result;
}

export function initActiveDirectory(rows: Row[], setRows: any) {
    const rowsCopy = [...rows];

    for (let i = 0; i < 2; i++) {
        if (rows[i].type === 'Repository') {
            const activeDirectoryDate = rows[i].content.date;

            for (let j = i + 1; j < rows.length; j++) {
                if (rows[j].type === 'Repository') break;

                if (rows[j].content.date === activeDirectoryDate) {
                    rows[j].content.active = true;
                    console.log(`${activeDirectoryDate} set to active`)
                    break;
                }
            }
        }
    }

    setRows(rowsCopy);
}