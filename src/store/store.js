import { createStore, combineReducers } from "redux"
import postsReducer from "./posts/reducer"
import postReducer from "./post/reducer"

const rootReducer = combineReducers({ posts: postsReducer, post: postReducer })
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
