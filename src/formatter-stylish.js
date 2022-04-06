import _ from 'lodash';

const getIndent = (depth, spacesCount = 4) => {
  const indentSize = depth * spacesCount;
  return ' '.repeat(indentSize - 2);
};

const getStructure = (data, depthData) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }
  const lines = Object.entries(data)
    .map(([key, value]) => `${getIndent(depthData + 1)}  ${key}: ${getStructure(value, depthData + 1)}`);
  return ['{', ...lines, `${getIndent(depthData)}  }`].join('\n');
};

const makeStylish = (tree) => {
  const iter = (currentTree, depth) => currentTree.map((node) => {
    switch (node.type) {
      case 'added':
        return `${getIndent(depth)}+ ${node.key}: ${getStructure(node.value, depth)}\n`;
      case 'deleted':
        return `${getIndent(depth)}- ${node.key}: ${getStructure(node.value, depth)}\n`;
      case 'unchanged':
        return `${getIndent(depth)}  ${node.key}: ${getStructure(node.value, depth)}\n`;
      case 'nested':
        return `${getIndent(depth)}  ${node.key}: {\n${iter(node.children, depth + 1).join('')}  ${getIndent(depth)}}\n`;
      case 'changed':
        return `${getIndent(depth)}- ${node.key}: ${getStructure(node.val1, depth)}\n${getIndent(depth)}+ ${node.key}: ${getStructure(node.val2, depth)}\n`;
      default:
        throw new TypeError(`Unknown type - ${node.type}`);
    }
  });
  return `{\n${iter(tree, 1).join('')}}\n`;
};

export default makeStylish;
