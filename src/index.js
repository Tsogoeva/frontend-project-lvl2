import _ from 'lodash';
import readFile from './path.js';

export default (filepath1, filepath2) => {
  const content1 = readFile(filepath1);
  const content2 = readFile(filepath2);
  const dataParse1 = JSON.parse(content1);
  const dataParse2 = JSON.parse(content2);

  const calculateDifferences = (data1, data2) => {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const allKeys = _.union(keys1, keys2).sort();

    const result = allKeys.map((key) => {
      if (!Object.hasOwn(data1, key)) {
        return `  + ${key}: ${data2[key]}`;
      } if (!Object.hasOwn(data2, key)) {
        return `  - ${key}: ${data1[key]}`;
      } if (data1[key] !== data2[key]) {
        return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
      }
      return `    ${key}: ${data1[key]}`;
    });
    return `{\n${result.join('\n')}\n}`;
  };
  return calculateDifferences(dataParse1, dataParse2);
};
