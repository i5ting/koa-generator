var app = require('koa')();
var koa = require('koa-router')();
var logger = require('koa-logger');


var index = require('./routes/index');
var users = require('./routes/users');


app.use(logger());

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

koa.use('/', index.routes(), index.allowedMethods());
koa.use('/users', users.routes(), users.allowedMethods());

app.use(koa.routes());




module.exports = app;

// app.listen(3000);

// console.log('listening on port 3000');
