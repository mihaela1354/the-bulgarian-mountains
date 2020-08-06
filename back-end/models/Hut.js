const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const {String, Number, Boolean, ObjectId, Date} = Schema.Types;

const HutSchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    description:{
        type: String
    },
    imageUrl:{
        type: String
    },
    grade:{
        type: Number,
        max: 10,
        min: 0
    },
    nearby:[{
        type: ObjectId
    }]
}, 
{ timestamps: true })

module.exports = mongoose.model("Hut", HutSchema)