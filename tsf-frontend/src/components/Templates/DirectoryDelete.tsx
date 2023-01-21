import React from "react";
import deleteDirectoryIcon from "../../assets/deleteX.png";
import Axios from "axios";
import {RepositoryContent} from "./Repository";
import {DirectoryRow} from "./Table";
import {useAlert} from "react-alert";

type Props = {
    directory: DirectoryRow;
    repository: RepositoryContent;
    deleteURL: string
};

export const DirectoryDelete: React.FC<Props> = ({directory, deleteURL, repository}) => {
    const alert = useAlert();

    /**
     * Send Ajax request to delete the selected directory from local environment <br>
     * If succeeded: Remove deleted directory from rows
     */
    function deleteResult(): void {
        Axios.post(deleteURL, {
            'action': 'deleteResult',
            'from': 'Run',
            repositoryName: repository.name,
            directoryName: directory.content.date,
        }).then(() => {
            console.log(`deleted: ${repository.name}/${directory.content.date}`);
            alert.success(`Successfully deleted!`);
            removeDirectory();
        }).catch(response => {
            console.log(response)
        })

        function removeDirectory(): void {
            const directoriesCopy = [...repository.directories];

            const index = directoriesCopy.findIndex(directoryToFind => directoryToFind.content.date === directory.content.date)

            directoriesCopy.splice(index, 1);

            repository.setDirectories(directoriesCopy);
        }
    }

    return (
        <img className="deleteIcon" src={deleteDirectoryIcon} alt="del" onClick={deleteResult}/>
    );
}