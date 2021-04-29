import axios from 'axios';
import environments from "../environments";
import jsonInterceptor from '../interceptors/json.interceptor'
import acceptTokenInterceptor from '../interceptors/access-token.interceptor'
import socketIdInterceptor from "../interceptors/socket-id.interceptor";

export default class AuthService {

  #http = axios.create();

  constructor() {
    this.#http.interceptors.request.use((req) => {
      jsonInterceptor(req);
      acceptTokenInterceptor(req);
      socketIdInterceptor(req)
      return req;
    });
  }

  doLogin(data) {
    const url = environments.endpoints.doLogin;
    return this.#http.post(url, data)
  }

  doRegister(data) {
    const url = environments.endpoints.doRegister;
    return this.#http.post(url, data)
  }

  token() {
    const url = environments.endpoints.fetchUser;
    return this.#http.post(url)
  }
}