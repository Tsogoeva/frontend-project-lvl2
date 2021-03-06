import _ from 'lodash';

const getValue = (value) => {
  if (_.isObject(value) && value !== null) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const getAscentryPath = (path, nodeKey) => [path, nodeKey];

const makePlain = (ast, path = '') => {
  const result = ast.map((node) => {
    const finalPath = getAscentryPath(path, node.key).join('.').slice(1);
    switch (node.type) {
      case 'nested':
        return makePlain(node.children, `${getAscentryPath(path, node.key).join('.')}`);
      case 'added':
        return `Property '${finalPath}' was added with value: ${getValue(node.value)}`;
      case 'deleted':
        return `Property '${finalPath}' was removed`;
      case 'changed':
        return `Property '${finalPath}' was updated. From ${getValue(node.val1)} to ${getValue(node.val2)}`;
      default:
        return '';
    }
  })
    .filter((item) => item !== '');
  return result.join('\n');
};

export default makePlain;
