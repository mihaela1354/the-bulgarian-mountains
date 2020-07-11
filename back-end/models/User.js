const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const {String, Number, Boolean, ObjectId, Date} = Schema.Types;

const UserSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", UserSchema)