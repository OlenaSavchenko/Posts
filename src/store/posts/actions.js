import { SET_POSTS, DELETE_POST, CREATE_POST, UPDATE_POST } from './types'

export const setPosts = data => {
    return { type: SET_POSTS, payload: data }
}

export const deletePost = id => {
    return { type: DELETE_POST, payload: id }
}

export const createPost = data => {
    return { type: CREATE_POST, payload: data }
}

export const updatePost = data => {
    return { type: UPDATE_POST, payload: data }
}