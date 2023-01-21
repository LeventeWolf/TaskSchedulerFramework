import Axios from "axios";
import {RowsActionTypes} from "../constants/action-types";

export const fetchRepositories = (url) => async (dispatch) => {
    const response = await Axios.get(url);

    dispatch(setRows(response.data));
};

export const setRows = (repositories) => {
    return {
        type: RowsActionTypes.SET_ROWS,
        payload: repositories,
    }
}

export const destroyRepositories = () => {
    return {
        type: RowsActionTypes.DESTROY_REPOSITORIES,
    }
}

export const updateRepository = (repository) => {
    return {
        type: RowsActionTypes.UPDATE_REPOSITORY,
        payload: repository,
    }
}