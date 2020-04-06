const express = require('express');
require('./db/mongoose.js')

const app = express()
const path = require('path')


var allowCrossDomain = function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
// intercept OPTIONS method
if ('OPTIONS' == req.method) {
res.sendStatus(200);
} else {
next();
}
};

app.use(allowCrossDomain);


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use(require('./userRoute.js'))
// app.use(express.static(path.join(__dirname, 'client/build')));

if(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));
 app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })}

app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})

const port = process.env.PORT || 5000;
app.listen(port,()=>{
  console.log('listening on port' + port);
})
