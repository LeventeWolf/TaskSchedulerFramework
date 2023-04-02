import Axios from "axios";
import {ExplorerActionTypes} from "../constants/action-types";

export const fetchExplorer = (url) => async (dispatch) => {
    const response = await Axios.get(url);

    console.log(response.data)

    dispatch(setExplorer(response.data));
};

export const setExplorer = (explorer) => {
    return {
        type: ExplorerActionTypes.SET_EXPLORER,
        payload: explorer,
    }
}