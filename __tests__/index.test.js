import { test, expect } from '@jest/globals';
import gendiff from '../src/index.js';
import readFile from '../src/path.js';

test('verification gendiff for json-file using the "stylish" format', () => {
  expect(gendiff('file1.json', 'file2.json')).toBe(readFile('stylish-result.txt'));
});

test('verification gendiff for yaml-file using the "stylish" format', () => {
  expect(gendiff('file1.yml', 'file2.yml')).toBe(readFile('stylish-result.txt'));
});

test('verification gendiff for json-file using the "plain" format', () => {
  expect(gendiff('file1.json', 'file2.json')).toBe(readFile('plain-result.txt'));
});

test('verification gendiff for yaml-file using the "plain" format', () => {
  expect(gendiff('file1.yml', 'file2.yml')).toBe(readFile('plain-result.txt'));
});
