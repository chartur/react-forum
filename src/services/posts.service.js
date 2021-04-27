import axios from "axios";
import jsonInterceptor from "../interceptors/json.interceptor";
import environments from "../environments";
import accessTokenInterceptor from "../interceptors/access-token.interceptor";

export default class PostsService {
  #http = axios.create();

  constructor() {
    this.#http.interceptors.request.use((req) => {
      accessTokenInterceptor(req);
      jsonInterceptor(req);
      return req;
    })
  }

  getLastPosts() {
    return this.#http.get(environments.endpoints.getLastPosts)
  }

  createPost(postData) {
    return this.#http.post(environments.endpoints.createPost, postData)
  }
}