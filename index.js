require('dotenv').config()
const express = require('express')
const { app, server } = require('./configs/socket')
const port = 3008

var cors = require('cors')
app.use(cors())
app.use(express.json())

const adaRouter = require('./Routes/adafruit')
const schedulerRouter = require('./Routes/scheduler')


app.use('/ada', adaRouter)
app.use('/scheduler', schedulerRouter)

server.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
