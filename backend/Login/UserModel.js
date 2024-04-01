const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginUserSchema = new Schema({
    id:Number,
    name:String,
});

const LoginUser = mongoose.model('LoginUser',loginUserSchema);

module.exports = LoginUser;