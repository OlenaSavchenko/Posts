export const addComment = async (obj) => {
    const response = await fetch("https://bloggy-api.herokuapp.com/comments", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    return await response.json();
}