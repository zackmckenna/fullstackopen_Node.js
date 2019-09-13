const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
/*const url = `mongodb+srv://fullstack:[password]@cluster0-lcd1p.mongodb.net/phonebook-app?retryWrites=true&w=majority`*/
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
  name: String,
  number: String,
  date: Date,
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)
