import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('verification gendiff for json-file using the "stylish" format', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const result = gendiff(filepath1, filepath2, 'stylish');
  expect(result).toBe(readFile('stylish-result.txt'));
});

test('verification gendiff for yaml-file using the "stylish" format', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');
  const result = gendiff(filepath1, filepath2, 'stylish');
  expect(result).toBe(readFile('stylish-result.txt'));
});

test('verification gendiff for json-file using the "plain" format', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const result = gendiff(filepath1, filepath2, 'plain');
  expect(result).toBe(readFile('plain-result.txt'));
});

test('verification gendiff for yaml-file using the "plain" format', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');
  const result = gendiff(filepath1, filepath2, 'plain');
  expect(result).toBe(readFile('plain-result.txt'));
});

test('verification gendiff for json-file using the "json" format', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const result = gendiff(filepath1, filepath2, 'json');
  expect(result).toBe(readFile('json-result.txt'));
});

test('verification gendiff for yaml-file using the "json" format', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');
  const result = gendiff(filepath1, filepath2, 'json');
  expect(result).toBe(readFile('json-result.txt'));
});

test('verification gendiff using the unknown format', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const result = gendiff(filepath1, filepath2, 'unknown');
  expect(result).toBe('Unknown format: unknown');
});
