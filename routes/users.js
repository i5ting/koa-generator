var router = require('koa-router')();

router.get('/', function *(next) {
  this.body = 'Hello World1';
});

module.exports = router;
