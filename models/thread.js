var mongoose = require('mongoose')
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

// Topic
var Thread = new Schema({
  subject: String,
  _forumId: ObjectId,
  views: int,
  replies: int,
  digest: Boolean,
  _authorId: ObjectId,
  createAt:{type: Date, default: Date.now}
})

module.exports = Thread
