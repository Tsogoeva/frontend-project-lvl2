import _ from 'lodash';

const findPath = (ast) => {
  const iter = (node, path) => {
    const keys = _.keys(node);
    return keys.flatMap((key) => {
      if (_.isObject(node[key])) {
        const updatedPath = `${path}.${key}`;
        return iter(node[key], updatedPath);
      }
      const finalPath = `${path}.${key}`;
      return `${finalPath}`;
    });
  };
  return iter(ast, '').join('\n');
};

/* const getStructure = (data, depthData) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }
  const lines = Object.values(data)
    .map((value) => `${getStructure(value, depthData + 1)}`);
  return lines.join();
}; */

const makePlain = (ast) => {
  const iter = (data, depth) => data.map((node) => {
    switch (node.type) {
      case 'added':
        return `Property ${findPath(node)} was added with value: ${node.value}`;
      case 'deleted':
        return `Property ${findPath(node)} was removed`;
      case 'changed':
        return `Property ${findPath(node)} was updated. From ${node.val1} to ${node.val2}`;
      /* case 'nested':
        return */
      default:
        return '';
    }
  });
};

export default makePlain;
