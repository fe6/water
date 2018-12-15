import msg from './msg';

let instance;
let delayDefault = 5000;
let styleDefault = {};
let closeDefault = () => {};

function notice(params) {
  instance = instance || msg();
  params.delayTime = params.delayTime || delayDefault;
  params.style = params.style || styleDefault;
  params.close = params.close || closeDefault;

  instance(params);
}

export default {
  info(params) {
    params.type = 'info';
    return notice(params);
  },
  success(params) {
    params.type = 'success';
    return notice(params);
  },
  warning(params) {
    params.type = 'warning';
    return notice(params);
  },
  error(params) {
    params.type = 'error';
    return notice(params);
  },
  config(params) {
    if (params.delayTime) {
      delayDefault = params.delayTime;
    }
    if (params.style) {
      styleDefault = params.style;
    }
    if (params.close) {
      closeDefault = params.close;
    }
  },
};
