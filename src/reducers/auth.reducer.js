import {
  SIGN_IN,
  SIGN_OUT
} from "../actions/auth.actions";

export default (state = {
  loggedIn: false,
  token: null,
  authUser: null
}, action) => {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem('jwt_auth', action.payload.token);
      state = {
        ...state,
        token: action.payload.token,
        authUser: action.payload.user,
        loggedIn: true,
      };
      break;
    case SIGN_OUT:
      localStorage.removeItem('jwt_auth');
      state = {
        ...state,
        token: null,
        authUser: null,
        loggedIn: false
      };
      break;
  }

  return state;
}