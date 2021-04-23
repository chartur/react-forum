const envirements = {
  host: 'http://localhost:5000/',

  get endpoints() {
    return {
      doRegister: `${this.host}auth/sign-up`, // POST
      doLogin: `${this.host}auth/sign-in`, // POST
      fetchUser: `${this.host}auth/token`, // POST

      // Profile
      profileAvatar: `${this.host}profile/image`, // PUT
    }
  }
};

export default envirements;