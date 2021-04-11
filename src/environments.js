export default {
  host: 'http://localhost:5000/',

  get endpoints() {
    return {
      doRegister: `${this.host}auth/sign-up`
    }
  }
}