const PostCard = (props) => {
    const { post: { title, body, id }, handleShowMore, handleUpdatePost, handleDeletePost } = props
    return (
        <li>
            <h2>{title}</h2>
            <p>{body}</p>
            <button type="button" onClick={() => handleShowMore(id)}>Show more</button>
            <button type="button" onClick={() => handleUpdatePost(id)}>Update post</button>
            <button type="button" onClick={() => handleDeletePost(id)}>Delete post</button>
        </li>
    )
}

export default PostCard