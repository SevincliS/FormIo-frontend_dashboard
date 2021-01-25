import axios from "axios";
import { getToken } from "./tokenManager";

axios.interceptors.request.use(
  function (config) {
    let { url } = config;
    let splittedUrl = url.split("/");
    let route = splittedUrl[splittedUrl.length - 1];
    if (route === "login" || route === "createUser") {
      return config;
    } else {
      let token = getToken();
      if (token) {
        config.headers["x-auth-token"] = token;
        return config;
      } else {
        return Promise.reject("there is no token");
      }
    }
  },
  (err) => {
    return Promise.reject("Unable to send request, err:" + err);
  }
);

const backendUrl = "http://localhost:5005";

export { backendUrl };
