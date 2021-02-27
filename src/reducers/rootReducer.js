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
        default: return state;
    }
}

export default rootReducer;