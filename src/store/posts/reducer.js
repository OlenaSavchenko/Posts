import { SET_POSTS, DELETE_POST, CREATE_POST, UPDATE_POST } from './types'
const postsReducer = (state = [], action) => {
    switch (action.type) {
        case SET_POSTS:
            return ([...action.payload])
        case DELETE_POST:
            return state.filter(post => post.id !== action.payload)
        case CREATE_POST:
            return ([...state, action.payload])
        case UPDATE_POST:
            let newState = [...state]
            const objIndex = newState.findIndex(post => post.id === action.payload.id)
            newState.splice(objIndex, 1, action.payload)
            return newState
        default:
            return state
    }
}

export default postsReducer
