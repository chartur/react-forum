import axios from "axios";
import environments from "../environments";
import jsonInterceptor from "../interceptors/json.interceptor";
import acceptTokenInterceptor from "../interceptors/access-token.interceptor";
import socketIdInterceptor from "../interceptors/socket-id.interceptor";

export default class ProfileService {
  #http = axios.create();

  constructor() {
    this.#http.interceptors.request.use((req) => {
      jsonInterceptor(req);
      acceptTokenInterceptor(req);
      socketIdInterceptor(req)
      return req;
    });
  }

  updateProfileImage = (imageData) => {
    return this.#http.put(environments.endpoints.profileAvatar, imageData)
  }

  updateProfileDetails = (profileData) => {
    return this.#http.put(environments.endpoints.profileDetails, profileData)
  }
}