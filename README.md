# tipi-template-tslib

[![npm][0]][1]
[![Commitizen friendly][2]][3]

This is a [tipi-cli][4] template.

## Installation

```sh
npm install --global tipi-cli
```

## Usage

### Creating a new project using the template from github

```sh
curl -L https://github.com/clebert/tipi-template-tslib/archive/master.tar.gz | tar -xf- --strip 1 "*/template"
```

```sh
tipi create "new-project" --template ./template --author "Clemens Akens" --email "clebert@me.com" --description "TODO" --user "clebert"
```

```sh
rm -rf template
```

### Creating a new project using the template from npm

This procedure is currently [not recommended][5].

```sh
tipi create "new-project" --template "tslib" --author "Clemens Akens" --email "clebert@me.com" --description "TODO" --user "clebert"
```

## Development

### Installing the dev dependencies

```sh
npm install
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

---
Built by (c) Clemens Akens. Released under the MIT license.

[0]: https://img.shields.io/npm/v/tipi-template-tslib.svg?maxAge=3600
[1]: https://www.npmjs.com/package/tipi-template-tslib
[2]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[3]: http://commitizen.github.io/cz-cli/
[4]: https://github.com/marionebl/tipi-cli#usage
[5]: https://github.com/clebert/tipi-template-tslib/issues/2
