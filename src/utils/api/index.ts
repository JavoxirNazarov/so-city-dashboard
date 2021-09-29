import axios from "axios";

const api = axios.create({
  baseURL: "https://some-domain.com/api/",
});

// Axios.defaults.headers.common.Authorization = `Bearer ${access}`;

// api.interceptors.request.use(
//   async (config) => {
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      // const access_token = await refreshAccessToken();
      // api.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return api(originalRequest);
    }
    return Promise.reject(error);
  },
);
