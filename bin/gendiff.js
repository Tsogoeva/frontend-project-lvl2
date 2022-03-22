#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';

const program = new Command();
program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to file1')
  .argument('<filepath2>', 'path to file2')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2));
  });;
program.parse();