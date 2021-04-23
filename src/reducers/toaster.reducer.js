import {
  HIDE_TOAST,
  ERROR_TOAST,
  SUCCESS_TOAST,
} from "../actions/toaster.actions";

const toasterReducer = (state = {
  shown: false,
  message: null,
  success: null
}, action) => {
  if(action.type)
  switch (action.type) {
    case HIDE_TOAST:
    case ERROR_TOAST:
    case SUCCESS_TOAST:
      state = {
        ...action.payload
      }
      break;
    default:
      break;
  }

  return state;
}

export default toasterReducer;