import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import {loadState, saveState} from "../lib/localStorage"

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preloadedStates = {
    results: loadState('results'),
    activeResult: loadState('activeResult', 'string'),
}

const store = createStore(
    reducers,
    preloadedStates,
    composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
    saveState('results', store.getState().results)
    saveState('activeResult', store.getState().activeResult, 'string')
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
