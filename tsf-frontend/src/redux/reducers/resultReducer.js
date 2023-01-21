import { ResultActionTypes  } from "../constants/action-types";

export const resultReducer = (results = [] , {type, payload}) => {
    switch (type) {
        case ResultActionTypes.SET_RESULT:
            return [payload];

        case ResultActionTypes.DESTROY_RESULT:
            return [];

        case ResultActionTypes.ADD_RESULT:
            const resultsCopy2 = [...results];

            if (!resultsCopy2.includes(payload)) {
                resultsCopy2.splice(0, 0, payload);
            }

            return resultsCopy2;

        case ResultActionTypes.REMOVE_RESULT:
            const resultsCopy = [...results];

            console.log('removing result!');

            return resultsCopy.filter(result => result !== payload);

        default:
            return results;
    }
}