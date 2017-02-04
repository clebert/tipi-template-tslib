# ${name}

[![npm][0]][1]
[![Build Status][2]][3]
[![Commitizen friendly][4]][5]

${description}.

## Installation

```sh
npm install -g ${name}
```

## Usage

```
Usage
  $ ${name} [options]

Options
  --help, -h     Usage information
  --version, -v  Version information

Examples
  $ ${name}
```

## Development

### Installing the dev dependencies

```sh
npm install
```

### Watching the sources and tests

```sh
npm run watch
```

### Checking for formatting and linting errors

```sh
npm run check
```

### Formatting the sources

```sh
npm run format
```

### Committing a new change

```sh
npm run cz
```

### Publishing a new version

```sh
npm run release
```

```sh
git push --follow-tags origin master
```

```sh
npm publish
```

### Starting in debug mode

```sh
DEBUG=* node ./lib/index.js
```

---
Built by (c) ${author}. Released under the MIT license.

[0]: https://img.shields.io/npm/v/${name}.svg?maxAge=3600
[1]: https://www.npmjs.com/package/${name}
[2]: https://travis-ci.org/${user}/${name}.svg?branch=master
[3]: https://travis-ci.org/${user}/${name}
[4]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[5]: http://commitizen.github.io/cz-cli/
