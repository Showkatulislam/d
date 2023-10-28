const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const ConnectionDB = require('./src/config/dbconnection');
const router = require('./src/routes/router');
const { port } = require('./src/secrete');



var app = express()

app.use(cors())
app.use(morgan('combined'))
app.use(express.json())

const myport=port

const server=http.createServer(app)
 
app.get('/', (req,res)=> {
  res.send('hello, world!')
})

app.use('/doc', router);

server.listen(myport, () => {
    console.log('Server running on http://localhost:8080/');
    ConnectionDB();
  });