const initState = {
    posts: [],
    comments: [],
    user: null
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_POSTS":
            return {
                ...state,
                posts: action.posts
            }
        case "SET_COMMENTS":
            return {
                ...state,
                comments: action.comments
            }
        case "ADD_COMMENT":   // For some reason JSONPlaceHolder does not return [COMMENTS] array with newly added comment so I am changing it in local state
            return {
                ...state,
                comments: [...state.comments, action.comment]
            }
        case "ADD_USER":
            return {
                ...state,
                user: action.user
            }
        default: return state;
    }
}

export default rootReducer;