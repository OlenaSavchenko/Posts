import { CREATE_COMMENT } from './types'

const commentReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_COMMENT:
            console.log(state);
            console.log(action.payload);
            return ([...state, action.payload])
        default:
            return state
    }
}
export default commentReducer