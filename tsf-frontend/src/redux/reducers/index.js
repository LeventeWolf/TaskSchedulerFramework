import { combineReducers } from "redux";
import { rowsReducer } from "./rowsReducer";
import { resultReducer } from "./resultReducer";
import { activeResultReducer } from "./activeResultReducer";
import { explorerReducer } from "./explorerReducer";

const reducers = combineReducers({
  rows: rowsReducer,
  results: resultReducer,
  activeResult: activeResultReducer,
  explorer: explorerReducer,
});

export default reducers;
