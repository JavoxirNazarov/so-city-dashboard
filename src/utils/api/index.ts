import axios from "axios";
import { store } from "../../redux";
import { logOut } from "../../redux/thunks/auth-thunks";
import { refreshToken } from "./refreshToken";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("ACCES_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  function (error) {
    const originalRequest = error.config;

    if (originalRequest?._retry === false && error?.response?.status === 401) {
      console.log("LOGGING OUT DUE TO REFRESH ERROR");
      store.dispatch(logOut());
      localStorage.clear();
    }

    if (
      error?.response?.status === 401 &&
      originalRequest?._retry === undefined
    ) {
      refreshToken(
        () => {
          originalRequest._retry = true;
        },
        () => {
          originalRequest.false = true;
        },
      );
      return api(originalRequest);
    }
    return Promise.reject(error);
  },
);

export default api;
