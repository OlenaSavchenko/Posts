import { SET_POST, CREATE_COMMENT } from './types'

export const setPost = data => {
    return { type: SET_POST, payload: data }
}

export const createComment = data => {
    return { type: CREATE_COMMENT, payload: data }
}