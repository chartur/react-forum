const envirements = {
  host: 'http://localhost:5000/',

  get endpoints() {
    return {
      doRegister: `${this.host}auth/sign-up`,
      doLogin: `${this.host}auth/sign-in`,
      fetchUser: `${this.host}auth/token`,
    }
  }
};

export default envirements;