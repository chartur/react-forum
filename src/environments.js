const envirements = {
  host: 'http://localhost:5000/',
  socketHost: 'http://localhost:9000/',

  get endpoints() {
    return {
      doRegister: `${this.host}auth/sign-up`, // POST
      doLogin: `${this.host}auth/sign-in`, // POST
      fetchUser: `${this.host}auth/token`, // POST

      // Profile
      profileAvatar: `${this.host}profile/image`, // PUT
      profileDetails: `${this.host}profile/details`, // PUT

      // Posts
      getLastPosts: `${this.host}posts/latest`, // GET
      createPost: `${this.host}posts` // POST
    }
  }
};

export default envirements;