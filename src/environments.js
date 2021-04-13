export default {
  host: 'http://localhost:5000/',

   fetch: (url, request) => {
    return new Promise(async (resolve, reject) => {
      request.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      const fetchResult = await fetch(url, request); //Making the req
      const result = await fetchResult.json(); // parsing the response

      if (fetchResult.ok) {
        return resolve(result); // return success object
      }


      const responseError = {
        type: 'Error',
        message: result.message || 'Something went wrong',
        data: result.data || '',
        code: result.code || '',
      };

      const error = new Error();
      error.info = responseError;

      return reject(error);
    });
  },

  get endpoints() {
    return {
      doRegister: `${this.host}auth/sign-up`,
      doLogin: `${this.host}auth/sign-in`,
      fetchUser: `${this.host}auth/token`,
    }
  }
}