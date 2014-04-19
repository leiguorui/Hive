var mongoose = require('mongoose')
var config = require('../config')

mongoose.connect(config.mongodb)

// User Model
exports.Member = mongoose.model('Member', require('./member'))

// Forum Model
exports.Forum = mongoose.model('Forum', require('./Forum'))
exports.Thread = mongoose.model('Thread', require('./Thread'))
exports.Post = mongoose.model('Post', require('./Post'))

// Chat Model
exports.Message = mongoose.model('Message', require('./message'))
exports.Room = mongoose.model('Topic', require('./topic'))