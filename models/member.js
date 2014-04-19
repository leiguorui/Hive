var mongoose = require('mongoose')
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

var Member = new Schema({
  username: String,
  password: String,
  credit: int,
  email: String,
  avatarUrl: String,
  // 签名
  signature: String,
  hasRight: 0,
  createAt:{type: Date, default: Date.now}
})

module.exports = Member
