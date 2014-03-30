var mongoose = require('mongoose')
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

var Forum = new Schema({
  name: String,
  description: String,
  _parentId: ObjectId,
  createAt:{type: Date, default: Date.now}
})

module.exports = Forum
