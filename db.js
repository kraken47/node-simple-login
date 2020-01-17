const mongoose = require('mongoose')
require('dotenv').config()
const host = process.env.host

mongoose.connect(host, {
    'useNewUrlParser': true
})

mongoose.set('useCreateIndex', true)