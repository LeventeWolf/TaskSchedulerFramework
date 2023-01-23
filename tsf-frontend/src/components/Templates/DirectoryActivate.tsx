import React from "react";
import Axios from "axios";
import {DirectoryRow} from "./Table";
import {blinkRepository} from "../../lib/animations";
import {RepositoryContent} from "./Repository";
import EyeIcon from "../../assets/eye-icon-2.png";

type Props = {
    directory: DirectoryRow;
    activateURL: string;
    repository: RepositoryContent;
};

export const DirectoryActivate: React.FC<Props> = ({directory, activateURL, repository}) => {

    /**
     * Make the clicked Result-Directory the header of the current repository
     */
    function makeResultDirectoryCurrent() {
        // If the 'Eye-Icon' is already active skip
        if (directory.content.active) return;

        // If successfully updated repository in database
        Axios.post(activateURL, {
            directory: directory.content
        }).then(() => {
            handleActive();
        }).catch((response) => {
            console.log(`[DIR] error in making directory current!`);
            console.log(response.body);
        });

        /**
         * Set the 'Eye-Icon' active & Update directory content in Repository
         */
        function handleActive() {
            const directoriesCopy = [...repository.directories]

            setAllDirectoryToPassive();
            activateDirectory(directory);

            updateRepositoryDataToActive();
            blinkRepository(directory.content.input);

            repository.setDirectories(directoriesCopy)
        }

        /**
         * Remove the current active directory to make the other the clicked one active
         */
        function setAllDirectoryToPassive() {
            const directoriesCopy = [...repository.directories];

            directoriesCopy.forEach(directory => directory.content.active = false)

            repository.setDirectories(directoriesCopy);
        }

        /**
         * This will toggle eye icon to white
         */
        function activateDirectory(directory: DirectoryRow) {
            directory.content.active = true;
        }

        /**
         * Update repository every attribute with the active directory
         */
        function updateRepositoryDataToActive() {
            const columnsToUpdate = [
                'status', 'time', 'note', 'date', 'coverage', 'osm', 'mdm', 'scg', 'dcg', 'sm', 'dm'
            ];

            columnsToUpdate.forEach(column =>
                // @ts-ignore
                repository[column] = directory.content[column]
            )
        }
    }

    return (
        <img className={directory.content.active ? "active" : "passive"} src={EyeIcon} style={{height: 16}} alt="current"
             onClick={makeResultDirectoryCurrent}/>
    );
}


