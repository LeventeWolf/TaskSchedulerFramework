import {ActiveResultActionTypes} from "../constants/action-types";

export const setActiveResult = (result) => {
    return {
        type: ActiveResultActionTypes.SET_ACTIVE_RESULT,
        payload: result,
    }
}
