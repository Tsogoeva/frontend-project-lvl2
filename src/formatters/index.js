import makeStylish from './stylish.js';
import makePlain from './plain.js';

export default (data, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(data);
    case 'plain':
      return makePlain(data);
    default:
      throw new TypeError(`Unknown format: ${format}`);
  }
};