import _ from 'lodash';
import path from './fs.js';


const genDiff = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const keys = _.union(keys1, keys2);

  const result = {};
  for (const key of keys) {
    if (!Object.hasOwn(file1, key)) {
      result[key] = 'added';
    } else if (!Object.hasOwn(file2, key)) {
      result[key] = 'deleted';
    } else if (file1[key] !== file2[key]) {
      result[key] = 'changed';
    } else {
      result[key] = 'unchanged';
    }
  }

  return result;
};

export default genDiff;