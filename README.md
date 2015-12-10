# koa-generator

http://koajs.com/



[![Koa Logo](https://dl.dropboxusercontent.com/u/6396913/koa/logo.png)](http://koajs.com/)

[Koa](https://www.npmjs.com/package/koa) application generator.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

## Features

- Express-style
- Support koa 1.x
- Support koa 2.x（todo）

## Installation

```sh
$ npm install -g koa-generator
```

with 2 commands

- koa (Support koa 1.x)
- koa2 (Support koa 2.x todo)

## Quick Start

The quickest way to get started with koa is to utilize the executable `koa(1)` to generate an application as shown below:

Create the app:

```bash
$ koa /tmp/foo && cd /tmp/foo
```

Install dependencies:

```bash
$ npm install
```

Rock and Roll

```bash
$ npm start
```

## Command Line Options

This generator can also be further configured with the following command line flags.

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to jade)
        --hbs           add handlebars engine support
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory

目前选项还没有完全实现

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/koa-generator.svg
[npm-url]: https://npmjs.org/package/koa-generator
[downloads-image]: https://img.shields.io/npm/dm/koa-generator.svg
[downloads-url]: https://npmjs.org/package/koa-generator