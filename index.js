const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Person = require('./models/Person')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.get('/', (req, res) => {
    res.json()
})

const DB_USER = 'natanaelmarcelino2006'
const DB_PASSWORD = encodeURIComponent('UmjGXtaGvhABBWxM')
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@api-test.kggokoq.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log('conectamos ao mongodb')
    app.listen(3000)
}).catch((err) => console.log(err))

