import { keys } from '@/helper/o';

export default (attrs: any): any => {
  const props: any[] = [];
  keys(attrs).forEach((attr: string) => {
    const newAttrs = attr.split('/');
    if (newAttrs.length > 1) {
      const param = newAttrs[1];
      props.push({
        param,
        ...attrs[attr],
      });
    }
  });

  return props;
};
