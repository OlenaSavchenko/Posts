import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { getPost } from '../api/posts';
import { addComment } from '../api/comments';
import { setPost } from "../store/post/actions"
import { createComment as createCommentState } from '../store/comment/actions'
import Comment from '../components/Comment/Comment';
import Error from '../components/Error/Error';

const Post = () => {
    const params = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const post = useSelector((state) => state.post)
    console.log(post);
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
        console.log(obj);
        await createComment(obj)
    }

    const createComment = async (obj) => {
        const newPost = await addComment(obj)
        dispatch(createCommentState(newPost))
    }

    return (
        error
            ? <Error />
            : <>
                <h3>{post.title}</h3>
                <div>{post.body}</div>
                {post.comments && post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                <button type="button" onClick={handleGoBackButton}>Go back</button>
                <form id="comments-form">
                    <input name="comments-text" type="text" placeholder="Add comment" />
                    <button type="submit" onClick={handleAddComment}>Add comment</button>
                </form>


            </>
    )
}

export default Post