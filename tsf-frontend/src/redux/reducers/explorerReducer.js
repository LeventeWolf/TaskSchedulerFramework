import { ExplorerActionTypes  } from "../constants/action-types";

const initialExplorer = {name: '<loading...>', isFolder: false, items: []};

export const explorerReducer = (explorer = initialExplorer, {type, payload}) => {
    switch (type) {
        case ExplorerActionTypes.SET_EXPLORER:
            return {...payload};

        case ExplorerActionTypes.ADD_EXPLORER:
            return [];

        default:
            return explorer;
    }
}