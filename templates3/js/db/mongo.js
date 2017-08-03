import mongoose from 'mongoose'
import mongo_config from '../config/mongo_config'
const mongo = () => {
    mongoose.Promise = Promise;
    const dblink = mongo_config[process.env.NODE_ENV || 'development'].connectionString

    const opts = {
        useMongoClient:true
    }

    mongoose.connect(dblink, opts)
    const db = mongoose.connection
    db.on('error', err => {
        console.log('------ Mongodb connection failed ------' + err)
        mongoose.disconnect()
    })
    db.on('open', () => console.log('------ Mongodb connection succeed ------'))
    db.on('close',() => {
        console.log('------ Mongodb connection colsed,connect again ------')
        mongoose.connect(dblink, opts)
    })
}

export default mongo