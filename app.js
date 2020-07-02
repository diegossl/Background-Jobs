const express = require('express')
const logger = require('morgan')
const dotenv = require('dotenv')

dotenv.config()

const indexRouter = require('./routes/index')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)

module.exports = app
