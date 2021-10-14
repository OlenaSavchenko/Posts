import { SET_POSTS, DELETE_POSTS, CREATE_POSTS, UPDATE_POSTS } from './types'

export const setPosts = data => {
    return { type: SET_POSTS, payload: data }
}

export const deletePosts = id => {
    return { type: DELETE_POSTS, payload: id }
}

export const createPost = data => {
    return { type: CREATE_POSTS, payload: data }
}

export const updatePost = data => {
    return { type: UPDATE_POSTS, payload: data }
}