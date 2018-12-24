import modalelem from './modalelem';
import confirmelem from './confirmelem';
import WIcon from '../icon/Icon';

export default {
  open(params) {
    const instance = modalelem(params);
    instance.open();
    return instance;
  },
  confirm(params) {
    const {
      icon = 'heart',
      title,
      body = '',
      modalStyle,
      headerName = '',
      iconName = '',
      confirmTitleName = '',
      footerName,
    } = params;
    params.confirmTitle = title;
    params.title = '';
    params.closable = false;
    params.footerName = ['w-modal-confirm-footer', footerName];
    params.modalStyle = modalStyle || { width: '416px' };
    params.render = (h) => {
      let bodyElem = '';
      if (body) {
        bodyElem = h('div', {
          class: ['w-modal-confirm-content'],
          domProps: {
            innerHTML: body,
          },
        });
      }
      return h('div', {
        class: ['w-modal-confirm'],
      }, [
        h('div', {
          class: ['w-modal-confirm-header', headerName],
        }, [
          h(WIcon, {
            class: ['w-modal-confirm-icon', iconName],
            props: {
              type: icon,
            },
          }),
          h('div', {
            class: ['w-modal-confirm-title', confirmTitleName],
            domProps: {
              innerHTML: params.confirmTitle,
            },
          }),
          bodyElem,
        ]),
      ]);
    };

    const instance = confirmelem(params);
    instance.confirm();
    return instance;
  },
};
