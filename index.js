const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

const personRoutes= require('./routes/personRoutes')

app.use('/person',personRoutes)

app.get('/', (req, res) => {
    res.json()
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@api-test.kggokoq.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log('conectamos ao mongodb')
    app.listen(3000)
}).catch((err) => console.log(err))

