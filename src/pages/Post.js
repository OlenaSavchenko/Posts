import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { getPost } from '../api/posts';
import { addComment } from '../api/comments';
import { setPost } from "../store/post/actions"
import { createComment as createCommentState } from '../store/post/actions'
import Comment from '../components/Comment/Comment';
import Error from '../components/Error/Error';

const Post = () => {
    const params = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const post = useSelector((state) => state.post)
    const [error, setError] = useState(false)

    useEffect(() => {
        getPost(params.id)
            .then(data => {
                dispatch(setPost(data))
            })
            .catch(() => {
                setError(true)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleGoBackButton = () => {
        history.goBack()
    }

    const handleAddComment = async (e) => {
        e.preventDefault()
        const form = e.target.closest("#comments-form");
        const body = form.elements["comments-text"].value
        const obj = {
            postId: post.id,
            body
        }
        await createComment(obj)
        form.elements["comments-text"].value = ""
    }

    const createComment = async (obj) => {
        const newPost = await addComment(obj)
        dispatch(createCommentState(newPost))
    }

    return (
        error
            ? <Error />
            : <div style={{ margin: "15px" }}>
                <button className="btn btn-dark" type="button" onClick={handleGoBackButton}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg></button>
                <h3>{post.title}</h3>
                <div>{post.body}</div>
                {post.comments && post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                <form id="comments-form" style={{ display: "grid", rowGap: "10px", maxWidth: "200px" }}>
                    <textarea name="comments-text" type="text" placeholder="Add comment" />
                    <button className="btn btn-dark" type="submit" onClick={handleAddComment}>Save</button>
                </form>
            </div>
    )
}

export default Post