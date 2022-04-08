import _ from 'lodash';

const findValue = (value) => {
  if (_.isObject(value) && value !== null) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const findPath = (path, nodeKey) => `${path}.${nodeKey}`;

const makePlain = (ast, path = '') => {
  const result = ast.map((node) => {
    const finalPath = findPath(path, node.key).slice(1);
    switch (node.type) {
      case 'nested':
        return makePlain(node.children, `${findPath(path, node.key)}`);
      case 'added':
        return `Property '${finalPath}' was added with value: ${findValue(node.value)}`;
      case 'deleted':
        return `Property '${finalPath}' was removed`;
      case 'changed':
        return `Property '${finalPath}' was updated. From ${findValue(node.val1)} to ${findValue(node.val2)}`;
      default:
        return '';
    }
  })
    .filter((string) => string !== '');
  return result.join('\n');
};

export default makePlain;
