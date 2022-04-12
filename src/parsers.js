import yaml from 'js-yaml';

export default (fileExtension, fileData) => {
  if (fileExtension === '.json') {
    return JSON.parse(fileData);
  }
  if (fileExtension === '.yaml' || fileExtension === '.yml') {
    return yaml.load(fileData);
  }
  return console.error(`Unknown file format: ${fileExtension}`);
};
