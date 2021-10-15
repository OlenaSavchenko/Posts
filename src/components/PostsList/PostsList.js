import { useState } from "react";
import { useHistory } from 'react-router';
import { useDispatch } from "react-redux"
import { deletePost as deletePostState } from '../../store/posts/actions';
import { deletePost } from '../../api/posts';
import PostCard from "../PostsCard/PostsCard";
import Modal from "../Modal/Modal";
import "./PostsList.scss"

const PostsList = (props) => {
    const dispatch = useDispatch()
    const { posts } = props
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editedPost, setEditedPost] = useState({})
    const history = useHistory()

    const handleShowMore = (id) => {
        history.push(`${history.location.pathname}/${id}`)
    }

    const handleCreatePost = () => {
        setIsModalOpen(true)
        setEditedPost({})
    }

    const handleUpdatePost = (id) => {
        const postObj = posts.find(post => post.id === id)
        setIsModalOpen(true)
        setEditedPost(postObj)
    }

    const handleDeletePost = (id) => {
        deletePost(id)
        dispatch(deletePostState(id))
    }

    const closeAddModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <button className="btn btn-dark btn-create" type="button" onClick={handleCreatePost}>
                <span style={{ marginRight: "10px" }}>Create post</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg></button>
            {isModalOpen && <Modal
                onCloseClick={closeAddModal}
                post={editedPost}
            />}
            <ul className="posts-list">{posts.map(post => {
                return (
                    <PostCard key={post.id}
                        post={post}
                        handleShowMore={handleShowMore}
                        handleUpdatePost={handleUpdatePost}
                        handleDeletePost={handleDeletePost} />
                )
            })}</ul>
        </>
    )
}

export default PostsList