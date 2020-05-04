const express = require('express')
const bodyParser = require('body-parser')

const app = express()
 
app.use(bodyParser);


app.get('/', function (req, res) {
  res.send('Hello World')
})
 


app.listen(3000, () =>{
    console.log('Running on port 3000')
})