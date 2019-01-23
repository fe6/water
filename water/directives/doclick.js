export default {
  bind(el, binding) {
    const documentHandler = (e) => {
      if (!el.contains(e.target) && binding.expression) {
        binding.value(e);
      }
    };
    el.emfeDocumentClick = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  unbind(el) {
    document.removeEventListener('click', el.emfeDocumentClick);
    delete el.emfeDocumentClick;
  },
};
