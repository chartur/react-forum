import {
  POSTS_STORE,
  POST_UPDATE,
  POST_DELETE,
  POST_SAVE
} from '../actions/posts.actions'

const postsReducer = (state = {
  loaded: false,
  posts: [],
}, action) => {
  switch (action.type) {
    case POSTS_STORE:
      state = {
        ...state,
        loaded: true,
        posts: action.payload.posts
      };
      break;
    case POST_UPDATE:
      state = {
        ...state,
        posts: state.posts.map((p) => p.id === action.payload.postId ? action.payload.post : p)
      };
      break;
    case POST_DELETE:
      state = {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.payload.postId)
      };
      break;
    case POST_SAVE:
      state = {
        ...state,
        posts: [
          action.payload.post,
          ...state.posts
        ]
      };
      break;
    default:
      break;
  }
  return state;
};

export default postsReducer;