import axios from 'axios';

const interceptor = () => {
  axios.interceptors.request.use(
    function (config) {
      console.log(config);
      // Do something before request is sent
      return config;
    },
    function (error) {
      console.log(error);
      // Do something with request error
      return Promise.resolve({ resultCode: '999' });
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      console.log(response);
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      console.log(error);
      return Promise.resolve({ resultCode: '999' });
    }
  );
};

export default interceptor;
