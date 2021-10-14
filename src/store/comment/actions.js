import { CREATE_COMMENT } from './types'

export const createComment = data => {
    return { type: CREATE_COMMENT, payload: data }
}