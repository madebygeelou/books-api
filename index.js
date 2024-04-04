const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)
const cors = require('cors')

 
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

app.use(express.json())

app.get('/', function (req,res){

    res.send('Hello World')
})

const booksController = require('./controllers/books_controller.js')
app.use('Book', languagesController)

app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  })