import './PostCard.scss'

const PostCard = (props) => {
    const { post: { title, body, id }, handleShowMore, handleUpdatePost, handleDeletePost } = props
    return (
        <li className="posts-item">
            <button className="btn btn--delete-post" type="button" onClick={() => handleDeletePost(id)}>&times;</button>
            <h2>{title}</h2>
            <p>{body}</p>
            <button className="btn btn-outline-success" type="button" onClick={() => handleUpdatePost(id)}>Update post</button>
            <button className="btn btn-dark btn--open-post" type="button" onClick={() => handleShowMore(id)}>Read more
            </button>
        </li >
    )
}

export default PostCard