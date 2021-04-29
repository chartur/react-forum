const envirements = {
  // host: 'http://localhost:5000/',
  // socketHost: 'ws://localhost:5000/',
  //
  host: 'https://mern-forum-app.herokuapp.com/',
  socketHost: 'wss://mern-forum-app.herokuapp.com/',

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