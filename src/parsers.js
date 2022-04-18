import yaml from 'js-yaml';

export default (parseType, data) => {
  switch (parseType) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown extension: ${parseType}`);
  }
};
