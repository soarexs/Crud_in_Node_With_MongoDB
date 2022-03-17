import Mongoose from 'mongoose'

const URI = 'mongodb://localhost/nodecrud'

let connection: typeof Mongoose
export const connect = async (uri = URI) => {
    if (!connection) { 
        connection = await Mongoose.connect(uri)
    }  
    return connection 
}