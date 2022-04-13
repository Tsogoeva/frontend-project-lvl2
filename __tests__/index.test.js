import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const cases = [
  ['file1.json', 'file2.json', 'stylish', 'stylish-result.txt'],
  ['file1.yml', 'file2.yml', 'stylish', 'stylish-result.txt'],
  ['file1.json', 'file2.json', 'plain', 'plain-result.txt'],
  ['file1.yml', 'file2.yml', 'plain', 'plain-result.txt'],
  ['file1.json', 'file2.json', 'json', 'json-result.txt'],
  ['file1.yml', 'file2.yml', 'json', 'json-result.txt'],
];

test.each(cases)('Comparing %s and %s in the %s format returns %s', (filename1, filename2, format, expected) => {
  const filepath1 = getFixturePath(filename1);
  const filepath2 = getFixturePath(filename2);
  const result = gendiff(filepath1, filepath2, format);
  expect(result).toBe(readFile(expected));
});
