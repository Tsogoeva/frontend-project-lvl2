#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import gendiff from '../src/index.js';

const program = new Command();
program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    const { format } = program;
    console.log(gendiff(filepath1, filepath2, format));
  });
program.parse(process.argv);

export default gendiff;
