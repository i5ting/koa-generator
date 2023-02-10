import redis from 'redis'
import config from '../config/redis_config'

// const redisLink = config['development']['connectionString']
const redisLink = config[process.env.NODE_ENV || 'development']['connectionString']
const redisClient = redis.createClient(redisLink)

redisClient
	.on('error', err => console.log('------ Redis connection failed ------' + err))
	.on('connect', () => console.log('------ Redis connection succeed ------'))

export default {
	redis: redis, 
	redisClient: redisClient, 
}