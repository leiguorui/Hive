var mongoose = require('mongoose')
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

var Message = new Schema({
  content: String,
  _creatorId: ObjectId,
  _topicId: ObjectId,
  createAt:{type: Date, default: Date.now}
})

module.exports = Message
