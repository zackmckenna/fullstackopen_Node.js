const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

/*const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  console.log('---')
  next()
}*/


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint '})
}

morgan.token('data', function(req, res){
  return res
})

app.use(cors())

app.use(morgan(':method :data :url :status :res[content-length] - :response-time ms'
))

app.use(bodyParser.json())
/*app.use(requestLogger)*/

let persons = [
  {
    name: 'Zack McKenna',
    number: '908-698-1556',
    id: 1
  },
  {
    name: 'Suzye',
    number: '777-777-7777',
    id: 2
  },
  {
    name: 'Erik',
    number: '555-555-5555',
    id: 3
  }
]

app.get('/info', (request, response) => {
  response.send(`
    <h1>Phonebook has info for ${persons.length} people.</h1>
    <br/>
    <h2>${new Date()}`)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person){
    response.send(
      `<p>Name: ${person.name}</p>

      <p>Number: ${person.number}</p>`
    )
  } else {
    response.status(404).end()
  }
})

app.post('/api/persons', (request, response) => {
  const randomId = Math.floor(Math.random() * 1000)
  const person = request.body

  if(!person.name){
    return response.status(400).json({
      error: 'Name is missing'
    })
  }

  if (!person.number){
    return response.status(400).json({
      error: 'Number is missing'
    })
  }

  persons.forEach(n => {
    if (person.name === n.name){
      return response.status(400).json({
        error: 'Name must be unique'
      })
    }
  })

  person.id = randomId
  console.log(person)

  persons = persons.concat(person)

  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = process.envPORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
