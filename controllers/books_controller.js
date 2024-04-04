const express = require('express')
const cors = require('cors')
const books = express.Router()
const Book = require('../models/books.js')

books.get('/', (req, res) => {
    Book.find()
        .then(foundBooks=> {
            res.json(foundBooks)
        })
})

books.get('/:books/:id', (req, res) => {
    Book.findOne({ name: req.params.name .toLowerCase() })
        .then(foundBook => {
            res.json(foundBook)
        })
})

books.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

books.post('/books', (req, res) => {
    Book.create(req.body)
    .then(() => {
        res.redirect('index.js')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
  let message= 'Validation Error:'
  for(var field in err.errors) {
    message += '${field} was ${err.errors[field].value}.'
    message += '${err.errors[field].message}'
  }
  console.log('Validation Error message', message)
  res.json('index.js', { message })
        }
        else {
        res.json('error404')
        }
    })
  })

  router.put('/books/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`index.js`)
    })
    .catch(err => {
        console.log('err', err)
        res.json('error404')
    })
  })
    
  Book.delete('/books/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(books => {
        res.redirect('index.js')
    })
    .catch(err => {
        console.log('err', err)
        res.json('error404')
    })
  })

module.exports = books