# koa-generator

http://koajs.com/

<img src='https://dl.dropboxusercontent.com/u/6396913/koa/logo.png' width='300'/>

[Koa](https://www.npmjs.com/package/koa) application generator.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

## Features

- Express-style
- Support koa 1.x（supported）
- Support koa 2.x（koa middleware supported,need Node.js 7.6+ ,babel optional）
- Support koa 2.x es6 style（koa middleware supported,need Node.js 7.6+ ,babel optional）

## Installation

```sh
$ npm install -g koa-generator
```

with 2 commands

- koa (Support koa 1.x)
- koa2 (Support koa 2.x)
- koa2-es6 (Support koa 2.x es6 style)

## Quick Start 2.x ES6
The quickest way to get started with koa is to utilize the executable `koa2(1)` to generate an application as shown below:

Create the app:

```bash
$ koa2-es6 /tmp/foo && cd /tmp/foo
```

Install dependencies:

```bash
$ npm install
```

Rock and Roll

```bash
$ npm start
```

more detail see [koa2-es6-demo](https://github.com/panmin/koa2-es6-demo)

## Quick Start 1.x

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

## Quick Start 2.x


The quickest way to get started with koa is to utilize the executable `koa2(1)` to generate an application as shown below:

Create the app:

```bash
$ koa2 /tmp/foo && cd /tmp/foo
```

Install dependencies:

```bash
$ npm install
```

Rock and Roll

```bash
$ npm start
```

more detail see [koa2-demo](https://github.com/17koa/koa2-demo)

## Command Line Options

This generator can also be further configured with the following command line flags.

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to jade)
        --hbs           add handlebars engine support
    -n, --nunjucks      add nunjucks engine support
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory

目前选项-c还没有实现

## Git Branch Details

- master = koa generator
- tpl = koa 1.x template
- tpl_2.x = koa 2.x template


## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/koa-generator.svg
[npm-url]: https://npmjs.org/package/koa-generator
[downloads-image]: https://img.shields.io/npm/dm/koa-generator.svg
[downloads-url]: https://npmjs.org/package/koa-generator