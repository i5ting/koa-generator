import Koa from 'koa'
import views from 'koa-views'
import json from 'koa-json'
import onerror from'koa-onerror'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import koaStatic from 'koa-static'
import koaRouter from 'koa-router'

// 自定义中间件
import mongo from './db/mongo'
import redis from './db/redis'   		//启动redis
import tools from './middlewares/tools'
import routes from './routes'


// 初始化
const app = new Koa()
const router = koaRouter()
mongo()//启动mongo

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(koaStatic(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: '{views}'
}))


// routes 加载路由
router.use('/',tools)
routes(router)
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app
