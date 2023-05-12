import { RowsActionTypes } from "../constants/action-types";

export const rowsReducer = (rows = [], {type, payload}) => {
    switch (type) {
        case RowsActionTypes.SET_ROWS:
            return [...payload];

        case RowsActionTypes.ADD_ROW:
            return [...rows, payload];

        case RowsActionTypes.REMOVE_ROW:
            return rows.filter(row => row.input !== payload.input);

        case RowsActionTypes.DESTROY_INPUTS:
            return [];

        case RowsActionTypes.UPDATE_INPUT:
            const rowsCopy = [...rows];

            for (let row of rowsCopy) {
                if (row.content.input === payload.input) {
                    row.content = payload;
                }
            }

            return rowsCopy;

        default:
            return rows;
    }
}