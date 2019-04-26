require('dotenv').config()
const express = require('express')
const controller = require('./controller')
const massive = require('massive')

const app = express()

app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env




massive(CONNECTION_STRING).then((dbInstance) => {
  app.set('db', dbInstance)
  console.log('db is connected')
  app.listen(SERVER_PORT, () => {
    console.log('listening on port', SERVER_PORT)
  })
})

app.get('/api/house', controller.get_houses)
app.post('/api/createHouse', controller.create_house)