import parse from './parsers.js';
import buildTree from './tree.js';
import getFormatted from './formatters/index.js';

export default (filepath1, filepath2, formatName = 'stylish') => {
  const dataParse1 = parse(filepath1);
  const dataParse2 = parse(filepath2);
  const buildedTree = buildTree(dataParse1, dataParse2);
  // console.log(JSON.stringify(buildedTree, null, '  '));
  // selectFormat(buildedTree, format);
  return getFormatted(buildedTree, formatName);
};
