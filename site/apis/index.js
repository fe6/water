import axios from 'axios';

/**
 * Create Axios
 */
export const http = axios.create({
  timeout: 60000,
});

export default function install(Vue) {
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return http;
      },
    },
  });
}
