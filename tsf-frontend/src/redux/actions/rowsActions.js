import Axios from "axios";
import {RowsActionTypes} from "../constants/action-types";

export const fetchInputs = (url) => async (dispatch) => {
    const response = await Axios.get(url);

    dispatch(setRows(response.data));
};

export const setRows = (inputs) => {
    return {
        type: RowsActionTypes.SET_ROWS,
        payload: inputs,
    }
}

export const destroyInputs = () => {
    return {
        type: RowsActionTypes.DESTROY_INPUTS,
    }
}

export const updateInput = (repository) => {
    return {
        type: RowsActionTypes.UPDATE_INPUT,
        payload: repository,
    }
}