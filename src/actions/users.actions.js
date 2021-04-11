export const USERS_STORE = 'users_store';
export const USER_UPDATE = 'user_store';
export const USER_DELETE = 'user_delete';
export const USER_SAVE = 'user_save';

export const storeUsers = (users) => {
  return {
    type: USERS_STORE,
    payload: {
      users
    }
  }
}

export const updateUser = (userId, user) => {
  return {
    type: USER_UPDATE,
    payload: {
      userId,
      user
    }
  }
}

export const deleteUser = (userId) => {
  return {
    type: USER_DELETE,
    payload: {
      userId
    }
  }
}

export const saveUser = (user) => {
  return {
    type: USER_SAVE,
    payload: {
      user
    }
  }
}