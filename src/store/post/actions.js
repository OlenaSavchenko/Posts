import { SET_POST } from './types'

export const setPost = data => {
    return { type: SET_POST, payload: data }
}

