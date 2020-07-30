const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { String, Number, Boolean, ObjectId, Date } = Schema.Types;

const HonorSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    nationality: {
        type: String
    }
}, 
{ timestamps: true }
);

module.exports = mongoose.model("Honor", HonorSchema)