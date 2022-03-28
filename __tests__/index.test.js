import { test, expect } from '@jest/globals';
import gendiff from '../src/index.js';
import readFile from '../src/path.js';

test('index', () => {
  expect(gendiff('file1.json', 'file2.json')).toBe(readFile('result-json-file.txt'));
});
