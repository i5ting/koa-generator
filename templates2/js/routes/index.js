var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.render('index', {
    title: 'Hello World Koa!'
  });
})
module.exports = router;
