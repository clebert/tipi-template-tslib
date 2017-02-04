#!/usr/bin/env node

import createDebug = require('debug');

import * as meow from 'meow';

const debug = createDebug('index');

const help = `
  Usage
    $ ${name} [options]

  Options
    --help, -h     Usage information
    --version, -v  Version information

  Examples
    $ ${name}
`;

const args = meow(help, {
  alias: {
    h: 'help',
    v: 'version'
  }
});

const knownFlags: string[] = [];

for (const flag of Object.keys(args.flags)) {
  if (knownFlags.every(knownFlag => knownFlag !== flag)) {
    debug('unknown flag: %s', flag);

    args.showHelp();

    process.exit(1);
  }
}

console.log('Hello, World!');
