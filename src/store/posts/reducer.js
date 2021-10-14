import { SET_POSTS, DELETE_POSTS, CREATE_POSTS, UPDATE_POSTS } from './types'
const postsReducer = (state = [], action) => {
    switch (action.type) {
        case SET_POSTS:
            return ([...action.payload])
        case DELETE_POSTS:
            return state.filter(post => post.id !== action.payload)
        case CREATE_POSTS:
            return ([...state, action.payload])
        case UPDATE_POSTS:
            // console.log("state", state);
            // console.log("action", action);
            return [...state].map(post => post.id === action.payload)
        default:
            return state
    }
}

export default postsReducer
