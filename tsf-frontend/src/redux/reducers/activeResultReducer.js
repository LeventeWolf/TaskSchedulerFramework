import {ActiveResultActionTypes} from "../constants/action-types";

export const activeResultReducer = (result = '', {type, payload}) => {
    switch (type) {
        case ActiveResultActionTypes.SET_ACTIVE_RESULT:
            if (payload === undefined) {
                return '';
            }

            return payload;

        default:
            return result;
    }
}