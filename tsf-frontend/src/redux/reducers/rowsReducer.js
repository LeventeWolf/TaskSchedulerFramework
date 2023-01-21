import { RowsActionTypes } from "../constants/action-types";

export const rowsReducer = (rows = [], {type, payload}) => {
    switch (type) {
        case RowsActionTypes.SET_ROWS:
            return [...payload];

        case RowsActionTypes.ADD_ROW:
            return [...rows, payload];

        case RowsActionTypes.REMOVE_ROW:
            return rows.filter(row => row.link !== payload.link);

        case RowsActionTypes.DESTROY_REPOSITORIES:
            return [];

        case RowsActionTypes.UPDATE_REPOSITORY:
            const rowsCopy = [...rows];

            for (let row of rowsCopy) {
                if (row.content.link === payload.link) {
                    row.content = payload;
                }
            }

            return rowsCopy;

        default:
            return rows;
    }
}