import { SET_POST, CREATE_COMMENT } from './types'

const postReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_POST:
            return ({ ...action.payload })
        case CREATE_COMMENT:
            return ({ ...state, comments: [...state.comments, action.payload] })
        default:
            return state
    }
}
export default postReducer
