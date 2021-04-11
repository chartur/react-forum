import {
  USERS_STORE,
  USER_UPDATE,
  USER_DELETE,
  USER_SAVE,
} from "../actions/users.actions";

export default (state = {}, action) => {
  switch (action.type) {
    case USERS_STORE:
      state = {
        ...state,
        users: action.payload.users
      }
      break;
    case USER_UPDATE:
      state = {
        ...state,
        users: state.users.map((u) => u.id === action.payload.usId ? action.payload.user : u)
      }
      break;
    case USER_DELETE:
      state = {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload.userId)
      }
      break;
    case USER_SAVE:
      state = {
        ...state,
        users: [
          action.payload.user,
          ...state.users
        ]
      }
      break;
  }
  return state;
}