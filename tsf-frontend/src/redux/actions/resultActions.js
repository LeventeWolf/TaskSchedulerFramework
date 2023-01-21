import {ResultActionTypes} from "../constants/action-types";

export const setResult = (path) => {
    return {
        type: ResultActionTypes.SET_RESULT,
        payload: path,
    }
}

export const addResult = (filePath) => {
    return {
        type: ResultActionTypes.ADD_RESULT,
        payload: filePath,
    }
}

export const removeResult = (filePath) => {
    return {
        type: ResultActionTypes.REMOVE_RESULT,
        payload: filePath,
    }
}