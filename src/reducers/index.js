import { combineReducers } from "redux";
import CommentsSections from './../Components/Comments/CommentsSections';

const initialPostsState = [];

const initialUserState = {
    userId: null,
    name: "",
    email: ""
}

const initialCommentsState = [];

const postsReducer = (state = initialPostsState, action) => {
    if (action.type === "GET_POSTS") {
        console.log("[POSTS REDUCER] ", action);
        return {
            ...state,
            posts: action.posts
        };
    } else {
        return []
    }
}

const userReducer = (state = initialUserState, action) => {
    if (action.type === "GET_USER") {
        return {
            ...state,
            user: action.user
        }
    } else {
        return { ...state.user }
    }
}

const commentsReducer = (state = initialCommentsState, action) => {
    if (action.type === "GET_COMMENTS") {
        return {
            ...state,
            comments: action.comments
        }
    } else {
        return { ...state.comments }
    }
}

const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
    comments: commentsReducer
})

export default rootReducer;