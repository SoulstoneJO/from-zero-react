import axios from 'axios';

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log('request error');
    console.log(error);
    if (error.name === 'AxiosError') {
      const appError = new Error();
      appError.code = 999;
      return Promise.reject(appError);
    }
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    if (response.data.resultCode !== '000') {
      const appError = new Error();
      appError.code = response.data.resultCode;
    }
    return response;
  },
  function (error) {
    console.log('response error');
    console.log(error);
    if (error.name === 'AxiosError') {
      const appError = new Error();
      appError.code = 998;
      return Promise.reject(appError);
    }
    return Promise.reject(error);
  }
);

export default axios;
