var router = require('koa-router')();

router.get('/', function *(next) {
  this.body = 'this a users response!';
});

module.exports = router;
