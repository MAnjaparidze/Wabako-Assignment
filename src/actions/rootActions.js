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
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then((res) => {
            return dispatch(setComments(res.data));
        })
    }
}

export const addComment = (commentObject) => {
    return (dispatch) => {
        return axios.post("https://jsonplaceholder.typicode.com/comments", commentObject).then((res) => {
            return dispatch(setAddComment(res.data))
        })
    }
}

export const setComments = (data) => {
    return {
        type: "SET_COMMENTS",
        comments: data
    }
}

export const setAddComment = (data) => {
    return {
        type: "ADD_COMMENT",
        comment: data
    }
}

// User Actions

export const getPostAuthor = async (userId) => {
    return await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => {
        return res.data;
    })
}

export const getUser = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            return dispatch(setUser(res.data[0]))  // Right now we don't have proper authentication so I am hardcoding and "SIMULATING" the Log In process
        })
    }
}

export const setUser = (data) => {
    return {
        type: "ADD_USER",
        user: data
    }
}