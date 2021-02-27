import axios from 'axios';

// Post Actions
export function getPosts() {
    return (dispatch) => {
        return axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            return dispatch(setPosts(res.data));
        })
    }
}

export const setPosts = (data) => {
    return {
        type: "SET_POSTS",
        posts: data
    }
}

// Comments Actions
export const getComments = (postId) => {
    return (dispatch) => {
        return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then((res) => {
            return dispatch(setComments(res.data));
        })
    }
}

export const addComment = (commentObject) => {
    return (dispatch) => {
        return axios.get("https://json")
    }
}

export const setComments = (data) => {
    return {
        type: "SET_COMMENTS",
        comments: data
    }
}

// User Actions

export const getPostAuthor = async (userId) => {
    return await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => {
        return res.data;
    })
}