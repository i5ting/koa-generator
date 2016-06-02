var mongoose = require('mongoose');
var config = require('./config.js');

module.exports = function () {
    return mongoose.connect(config.mongodb);
};
