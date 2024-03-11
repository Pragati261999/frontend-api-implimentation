import axios from 'axios';

const axiosInstance = axios.create({
  // Your axios configuration options here
});

export default ({ app, router, Vue }) => {
  // Optionally, you can set axios as a Vue prototype
  Vue.prototype.$axios = axiosInstance;

  // You can also set axios as a property on the Vue app
  app.config.globalProperties.$axios = axiosInstance;
};

