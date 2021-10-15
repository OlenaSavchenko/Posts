import { addPost, updatePost } from '../../api/posts'
import { createPost as createPostState, updatePost as updatePostState } from "../../store/posts/actions"
import { useDispatch } from 'react-redux'
import './Modal.scss'

const Modal = (props) => {
    const { post, onCloseClick } = props
    const dispatch = useDispatch()

    const handleClick = async (e) => {
        e.preventDefault()
        const form = e.target.closest("#posts-form");
        let newPost = { ...post }
        newPost.title = form.elements["post-title"].value
        newPost.body = form.elements["post-text"].value
        post.id ? await modifyPost(newPost) : await createPost(newPost)
        onCloseClick()
    }

    const createPost = async (obj) => {
        const newPost = await addPost(obj)
        dispatch(createPostState(newPost))
    }

    const modifyPost = async (obj) => {
        const newPost = await updatePost(obj)
        dispatch(updatePostState(newPost))
    }

    return (<>
        <div className="modal-box">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">{post.id ? "Edit post" : "Create post"}</h2>
                    <button className="btn modal-close-icon" onClick={onCloseClick}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    <form id="posts-form" className="posts-form">
                        <input name="post-title" type="text" placeholder="Post title" defaultValue={post.title} />
                        <textarea name="post-text" defaultValue={post.body} />
                        <button className="btn btn-dark" type="submit" onClick={handleClick}>{post.id ? "Save" : "Add"}</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="modal-backdrop" onClick={onCloseClick}></div>
    </>
    )
}



export default Modal