import yaml from 'js-yaml';
import path from 'path';

export default (filepath, readedFile) => {
  const fileExtension = path.extname(filepath).toLowerCase();
  if (fileExtension === '.json') {
    return JSON.parse(readedFile);
  }
  if (fileExtension === '.yaml' || fileExtension === '.yml') {
    return yaml.load(readedFile);
  }
  return console.error(`Unknown file format: ${fileExtension}`);
};
