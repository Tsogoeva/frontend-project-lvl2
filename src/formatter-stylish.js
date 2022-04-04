import _ from 'lodash';

export default (data, replacer = ' ', spacesCount = 2) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }
    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);
    const lines = currentValue.map((item) => {
      if (item.type === 'added') {
        return `${currentIndent}+ ${item.key}: ${item.value}`;
      }
      if (item.type === 'deleted') {
        return `${currentIndent}- ${item.key}: ${item.value}`;
      }
      if (item.type === 'nested') {
        return `${currentIndent}  ${item.key}: ${iter(item.children, depth + 2)}`;
      }
      if (item.type === 'changed') {
        return `${currentIndent}- ${item.key}: ${item.val1}\n${currentIndent}+ ${item.key}: ${item.val2}`;
      }
      if (item.type === 'unchaged') {
        return `${currentIndent}  ${item.key}: ${item.value}`;
      }
      return console.error('Unknown type');
    });
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };
  return iter(data, 1);
};
