import _ from 'lodash';

const buildTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = _.union(keys1, keys2).sort();

  const result = allKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!Object.hasOwn(data1, key)) {
      return {
        type: 'added', key, value: value2,
      };
    } if (!Object.hasOwn(data2, key)) {
      return {
        type: 'deleted', key, value: value1,
      };
    } if (_.isObject(value1) && _.isObject(value2)) {
      return {
        type: 'nested', key, children: buildTree(value1, value2),
      };
    } if (value1 !== value2) {
      return {
        type: 'changed', key, val1: value1, val2: value2,
      };
    }
    return {
      type: 'unchanged', key, value: value1,
    };
  });
    // console.log(JSON.stringify(result, null, '  '));
  return result;
};

export default buildTree;
