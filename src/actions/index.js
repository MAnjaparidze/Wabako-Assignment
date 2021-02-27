import axios from 'axios';
import CommentsSections from './../Components/Comments/CommentsSections';

// export function getUser() {
//     return (dispatch) => {
//         return axios.get()
//     }
// }

export function getPosts() {
    return (dispatch) => {
        return axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            dispatch(setPosts(res.data));
        })
    }
}

export function setPosts(posts) {
    return {
        type: "GET_POSTS",
        posts: posts
    }
}

// export function getComments() {
//     return (dispatch) => {
//         return axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
//             dispatch(setComments(res.data));
//         })
//     }
// }

// export function setComments(comments) {
//     return {
//         type: "SET_COMMENTS",
//         comments: comments
//     }
// }