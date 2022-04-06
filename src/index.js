import parse from './parsers.js';
import buildTree from './tree.js';
import makeStylish from './formatter-stylish.js';

export default (filepath1, filepath2, format = 'stylish') => {
  const dataParse1 = parse(filepath1);
  const dataParse2 = parse(filepath2);
  const buildedTree = buildTree(dataParse1, dataParse2);
  // selectFormat(buildedTree, format);
  return makeStylish(buildedTree);
};
