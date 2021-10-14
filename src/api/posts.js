const BASEURL = 'https://bloggy-api.herokuapp.com/posts'

export const getPosts = async () => {
    const response = await fetch(BASEURL)
    const data = await response.json()
    return data
}

export const getPost = async (id) => {
    const response = await fetch(`${BASEURL}/${id}?_embed=comments`)
    const data = await response.json()
    return data
}

export const addPost = async (obj) => {
    const response = await fetch(BASEURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    return await response.json();
};

export const updatePost = async (obj) => {
    const response = await fetch(`${BASEURL}/${obj.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    return await response.json();
}

export const deletePost = async (id) => {
    await fetch(`${BASEURL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}