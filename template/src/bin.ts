#!/usr/bin/env node

import createDebug = require('debug');

import * as meow from 'meow';
import { hello } from './main';

const debug = createDebug('bin');

const help = `
  Usage
    $ ${name} [options]

  Options
    --help, -h     Usage information
    --version, -v  Version information
    --name <s>     Greets <s>

  Examples
    $ ${name}
    $ ${name} --name "${author}"
`;

const args = meow(help, {
  alias: {
    h: 'help',
    v: 'version'
  }
});

const knownFlags = ['name'];

for (const flag of Object.keys(args.flags)) {
  if (knownFlags.every(knownFlag => knownFlag !== flag)) {
    debug('unknown flag: %s', flag);

    args.showHelp();

    process.exit(1);
  }
}

console.log(hello(args.flags['name']));
