import {
  POSTS_LAST_STORE,
  CREATE_NEW_POST,
} from '../actions/posts.actions'

const postsReducer = (state = {
  lastPosts: {
    loaded: false,
    posts: []
  },
  all: {
    loaded: false,
    posts: []
  },
}, action) => {
  switch (action.type) {
    case POSTS_LAST_STORE:
      state = {
        ...state,
        lastPosts: {
          loaded: true,
          posts: action.payload
        }
      }
      break;
    case CREATE_NEW_POST:
      const lastPosts = [...state.lastPosts.posts];
      if(lastPosts.length === 10) {
        lastPosts.shift();
      }
      state = {
        all: {
          ...state.all,
          posts: [...state.all.posts, action.payload]
        },
        lastPosts: {
          ...state.lastPosts,
          posts: [...lastPosts, action.payload]
        }
      }
      break;
    default:
      break;
  }
  return state;
};

export default postsReducer;