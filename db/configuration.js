const mongoose = require('mongoose')

const mongoConn = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true

        })
        console.log('Conexion Exitosa Mongo')
    }catch(e){
        console.log('Error', e)
        throw new Error ('Error Conexion Mongo')
    }

}

module.exports = { mongoConn }