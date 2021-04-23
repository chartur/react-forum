export const SIGN_IN = 'auth_sign_in';
export const SIGN_OUT = 'auth_sign_out';

export const signIn = (userData) => {
  return {
    type: SIGN_IN,
    payload: userData
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
};