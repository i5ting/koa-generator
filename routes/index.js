var router = require('koa-router')();

router.get('/', function *(next) {
  this.body = 'Hello World';
});

module.exports = router;
