const mongoose = require('mongoose')
const validator = require('validator')

const url = 'mongodb://naya_studio:aps00965@ds145183.mlab.com:45183/naya_studio_server'
mongoose.connect(url, {useNewUrlParser: true ,useCreateIndex:true, useUnifiedTopology: true,useFindAndModify:false })
