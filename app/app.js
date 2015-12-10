// var app = require('koa')()
//   , koa = require('koa-router')()
//   , logger = require('koa-logger')
//   , json = require('koa-json')
//   , views = require('koa-views')
//   , onerror = require('koa-onerror');
//
// const Koa = require('koa');
// const app = new Koa();
// const co = require('co');
var index = require('./routes/index');
var users = require('./routes/users');
//
// // // global middlewares
// // app.use(views('views', {
// //   root: __dirname + '/views',
// //   default: 'jade'
// // }));
// // app.use(require('koa-bodyparser')());
// // app.use(json());
// // app.use(logger());
// //
// // app.use(function *(next){
// //   var start = new Date;
// //   yield next;
// //   var ms = new Date - start;
// //   console.log('%s %s - %s', this.method, this.url, ms);
// // });
// //
// // app.use(require('koa-static')(__dirname + '/public'));
// //
// // // routes definition
// // koa.use('/', index.routes(), index.allowedMethods());
// // koa.use('/users', users.routes(), users.allowedMethods());
// //
// // // mount root routes
// // app.use(koa.routes());
//
//
// // logger
//
// app.use(co.wrap(function *(ctx, next){
//   const start = new Date;
//   yield next();
//   const ms = new Date - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// }));
//
// // response
//
// app.use(ctx => {
//   ctx.body = 'Hello World';
// });
//
//
// app.on('error', function(err, ctx){
//   log.error('server error', err, ctx);
// });
//
// module.exports = app;

const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');

app.use(convert(views('views', {
  root: __dirname + '/views',
  default: 'jade'
})));

// logger

app.use(co.wrap(function* (ctx, next) {
  const start = new Date();
  yield next();
  const ms = new Date() - start;
  console.log(`${ ctx.method } ${ ctx.url } - ${ ms }ms`);
}));

router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());

app.use(router.routes(), router.allowedMethods());
// response

module.exports = app;