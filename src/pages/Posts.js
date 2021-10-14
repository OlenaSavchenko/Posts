import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../api/posts";
import { setPosts } from '../store/posts/actions'
import PostsList from "../components/PostsList/PostsList";
import Error from "../components/Error/Error";

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)
    const [error, setError] = useState(null);

    useEffect(() => {
        getPosts()
            .then(posts => dispatch(setPosts(posts)))
            .catch(error => setError(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return error ? <Error /> : <PostsList posts={posts} />

}

export default Posts