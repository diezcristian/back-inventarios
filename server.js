
const app = require('./app')
const { mongoConn } = require('./db/configuration')
const dotenv = require('dotenv').config()

app.set('port', process.env.PORT || 3000)
const conn = mongoConn()

app.listen(app.get('port'), () => {
    console.log( `Arranco por puerto:  ${app.get('port')}`)
})
