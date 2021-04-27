export const POSTS_LAST_STORE = 'posts_last_store';
export const CREATE_NEW_POST = 'create_new_post';

export const storeLastPosts = (data) => {
  return {
    type: POSTS_LAST_STORE,
    payload: data
  }
}

export const createNewPost = (postData) => {
  return {
    type: CREATE_NEW_POST,
    payload: postData
  }
}