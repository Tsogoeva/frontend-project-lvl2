import yaml from 'js-yaml';
import path from 'path';
import readFile from './path.js';

export default (filepath) => {
  const fileExtension = path.extname(filepath).toLowerCase();
  if (fileExtension === '.json') {
    return JSON.parse(readFile(filepath));
  }
  if (fileExtension === '.yaml' || fileExtension === '.yml') {
    return yaml.load(readFile(filepath));
  }
  return console.error(`Unknown file format: ${fileExtension}`);
};
