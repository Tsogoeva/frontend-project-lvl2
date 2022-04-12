import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './tree.js';
import getFormatted from './formatters/index.js';

const getFilePath = (filename) => path.resolve(process.cwd(), filename);
const readFile = (filename) => fs.readFileSync(getFilePath(filename), 'utf-8');
const getExtension = (filename) => path.extname(filename).toLowerCase();

export default (filepath1, filepath2, formatName = 'stylish') => {
  const fileExtension1 = getExtension(filepath1);
  const fileExtension2 = getExtension(filepath2);
  const fileData1 = readFile(filepath1);
  const fileData2 = readFile(filepath2);
  const dataParse1 = parse(fileExtension1, fileData1);
  const dataParse2 = parse(fileExtension2, fileData2);
  const buildedTree = buildTree(dataParse1, dataParse2);
  return getFormatted(buildedTree, formatName);
};
