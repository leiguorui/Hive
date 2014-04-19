var mongoose = require('mongoose')
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

// Post
var Post = new Schema({
  subject: String,
  message: String,
  _forumId: ObjectId,
  _threadId: ObjectId,
  _authorId: ObjectId,
  createAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now}
})

module.exports = Post
