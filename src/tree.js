import _ from 'lodash';

const buildTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(allKeys);

  const result = sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!_.has(data1, key)) {
      return {
        type: 'added',
        key,
        value: value2,
      };
    } if (!_.has(data2, key)) {
      return {
        type: 'deleted',
        key,
        value: value1,
      };
    } if (_.isObject(value1) && _.isObject(value2)) {
      return {
        type: 'nested',
        key,
        children: buildTree(value1, value2),
      };
    } if ((value1 !== value2)
    || (typeof value1 !== typeof value2)) {
      return {
        type: 'changed',
        key,
        val1: value1,
        val2: value2,
      };
    }
    return {
      type: 'unchanged',
      key,
      value: value1,
    };
  });
  return result;
};

export default buildTree;
