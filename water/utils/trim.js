export default str => (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
