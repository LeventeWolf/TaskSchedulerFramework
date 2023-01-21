import React from "react";
import downArrow from "../../assets/grey-down-arrow.png";
import {RepositoryContent} from "./Repository";
import { useAlert } from 'react-alert'

type Props = {
    repository: RepositoryContent;
    directories: any;
    setDirectories: any;
};


/**
 * This Component handles the action related to 'Down-Arrow-Icon' click <br>
 * OnClick: Show / Hide the result directories.
 * @param repository the repository containing the 'Down-Arrow-Icon'
 * @param showURL send Ajax query to the specified URL to get folders
 * @constructor
 */
export const RepositoryShowResults: React.FC<Props> = ({repository}) => {

    /**
     * Show directories if Arrow-Icon is rotated, else hide
     */
    function handleDisplay() {
        repository.isOpen = !repository.isOpen;

        if (repository.isOpen) {
            repository.showDirectories();
        } else {
            repository.hideDirectories();
        }
    }

    return (
        <img src={downArrow} className={"downArrow" + (repository.isOpen ? ' rotated' : '')} alt={'[]'}
             onClick={handleDisplay}
        />
    )
};
