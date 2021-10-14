import { useState } from "react";
import { useHistory } from 'react-router';
import { useDispatch } from "react-redux"
import { deletePosts as deletePostState } from '../../store/posts/actions';
import { deletePost } from '../../api/posts'
import PostCard from "../PostsCard/PostsCard";
import Modal from "../Modal/Modal"

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
            <button type="button" onClick={handleCreatePost}>Create post</button>
            {isModalOpen && <Modal
                onCloseClick={closeAddModal}
                post={editedPost}
            />}
            {posts.map(post => {
                return (
                    <PostCard key={post.id}
                        post={post}
                        handleShowMore={handleShowMore}
                        handleUpdatePost={handleUpdatePost}
                        handleDeletePost={handleDeletePost} />
                )
            })}
        </>
    )
}

export default PostsList