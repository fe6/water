import notification from './notification';

export default {
  open(params = {}) {
    params.type = 'info';
    notification(params)(params);
  },
};
