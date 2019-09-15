require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Person = require('./models/phonebook')

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  console.log('---')
  next()
}

morgan.token('data', function(req, res){
  return res
})

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(requestLogger)
app.use(cors())
app.use(morgan(':method :data :url :status :res[content-length] - :response-time ms'
))

app.post('/api/persons', (request, response) => {
  const body = request.body
  
  if (body.name === undefined) {
    return response.status(400).json({ error: 'name is missing' })
  }

  if (body.number === undefined) {
    return response.status(400).json({ error: 'number is missing' })
  }

  const person = new Person ({
    name: body.name,
    number: body.number,
    date: new Date(),
  })

  person.save().then(savedPerson => {
    response.json(savedPerson.toJSON())
  })
})

app.put('/api/persons/:id', (request, response) => {
  const body = request.body
  
  if (body.name === undefined) {
    return response.status(400).json({ error: 'name is missing' })
  }

  if (body.number === undefined) {
    return response.status(400).json({ error: 'number is missing' })
  }

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, {new: true})
  .then(updatedPerson => {
    response.json(updatedPerson.toJSON())
    })
  .catch(error => {
    console.log(error)
  })
  })

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons.map(person => person.toJSON()))
  })
  .catch(error => {
    console.log(error)
  })
})

app.get('/info', (request, response) => {
  response.send(`
    <h1>Phonebook has info for ${persons.length} people.</h1>
    <br/>
    <h2>${new Date()}`)
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id)
  .then(person => {
    if (person) {
      response.json(person.toJSON())
    } else {
      response.status(404).end()
    }
  })
  .catch(error => next(error))
  })


app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint '})
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId'){
    return response.status(400).send({ error : 'id is wrong format'})
  }

  next(error)
}

app.use(errorHandler)
