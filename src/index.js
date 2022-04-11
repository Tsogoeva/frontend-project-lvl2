import parse from './parsers.js';
import readFile from './path.js';
import buildTree from './tree.js';
import getFormatted from './formatters/index.js';

export default (filepath1, filepath2, formatName = 'stylish') => {
  const readedFile1 = readFile(filepath1);
  const readedFile2 = readFile(filepath2);
  const dataParse1 = parse(filepath1, readedFile1);
  const dataParse2 = parse(filepath2, readedFile2);
  const buildedTree = buildTree(dataParse1, dataParse2);
  return getFormatted(buildedTree, formatName);
};
