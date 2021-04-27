export const SUCCESS_TOAST = 'success_toast';
export const ERROR_TOAST = 'success_toast';
export const HIDE_TOAST = 'hide_toast';

export const errorToast = (message) => {
  return {
    type: ERROR_TOAST,
    payload: {
      shown: true,
      success: false,
      message
    }
  }
}

export const successToast = (message) => {
  return {
    type: SUCCESS_TOAST,
    payload: {
      shown: true,
      success: true,
      message
    }
  }
}

export const hideToast = () => {
  return {
    type: HIDE_TOAST,
    payload: {
      shown: false,
      message: null,
      success: null
    }
  }
}