# Koa 2.x 四种模式

- default
- async
- gererator
- old

https://github.com/koajs/koa/tree/v2.x

## Default Example

```
const Koa = require('koa');
const app = new Koa();

// logger

app.use((ctx, next) => {
  const start = new Date;
  return next().then(() => {
    const ms = new Date - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });
});

// response

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

## Example with async functions (Babel required)

```
const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
  const start = new Date;
  await next();
  const ms = new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// response

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

## Example with generator

To use generator functions, you must use a wrapper such as co that is no longer supplied with Koa.

```
const Koa = require('koa');
const app = new Koa();
const co = require('co');

// logger

app.use(co.wrap(function *(ctx, next){
  const start = new Date;
  yield next();
  const ms = new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
}));

// response

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```
## Example with old signature

If you want to use old signature or be compatible with old middleware, you must use koa-convert to convert legacy generator middleware to promise middleware.

```
const Koa = require('koa');
const app = new Koa();
const convert = require('koa-convert')

// logger

app.use(convert(function *(next){
  const start = new Date;
  yield next;
  const ms = new Date - start;
  console.log(`${this.method} ${this.url} - ${ms}ms`);
}));

// response

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```