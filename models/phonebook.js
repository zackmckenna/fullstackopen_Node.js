const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const dotenv = require('dotenv').config();

console.log(process.env)
console.log(process.env.MONGODB_URI)
const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, {useNewParser: true})
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  },
  number: {
    type: String,
    minlength: 8,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})
personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)
