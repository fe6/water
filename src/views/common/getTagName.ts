import { kebabCase } from 'lodash/string';

export default (name: string): string => `w-${kebabCase(name)}`;
