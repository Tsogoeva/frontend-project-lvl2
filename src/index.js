import parse from './parsers.js';
import buildTree from './tree.js';

export default (filepath1, filepath2) => {
  const dataParse1 = parse(filepath1);
  const dataParse2 = parse(filepath2);
  const buildedTree = buildTree(dataParse1, dataParse2);
  return buildedTree;
};
