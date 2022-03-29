import { test, expect } from '@jest/globals';
import gendiff from '../src/index.js';
import readFile from '../src/path.js';

test('check gendiff for json-file', () => {
  expect(gendiff('file1.json', 'file2.json')).toBe(readFile('result-json-file.txt'));
});

test('check gendiff for yaml-file', () => {
  expect(gendiff('file1.yaml', 'file2.yaml')).toBe(readFile('result-json-file.txt'));
});
