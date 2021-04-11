export const POSTS_STORE = 'post_store';
export const POST_UPDATE = 'post_update';
export const POST_DELETE = 'post_delete';
export const POST_SAVE = 'post_save';

export const storePosts = (posts) => {
  return {
    type: POSTS_STORE,
    payload: {
      posts
    }
  }
}

export const updatePost = (postId, post) => {
  return {
    type: POST_UPDATE,
    payload: {
      postId,
      post
    }
  }
}

export const deletePost = (postId) => {
  return {
    type: POST_DELETE,
    payload: {
      postId
    }
  }
}

export const savePost = (post) => {
  return {
    type: POST_SAVE,
    payload: {
      post
    }
  }
}