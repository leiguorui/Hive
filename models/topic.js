var mongoose = require('mongoose')
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

// Topic
var Topic = new Schema({
  subject: String,
  createAt:{type: Date, default: Date.now}
})

module.exports = Topic