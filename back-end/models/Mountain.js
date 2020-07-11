const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.Model;
const {String, Number, Boolean, ObjectId, Date} = Schema.Types;

const MountainSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    rating: {
        type: Number,
        default: 0
    },
    routes: [{
        type: ObjectId,
        ref: "Route"
    }],
    huts: [{
        type: ObjectId,
        ref: "Hut"
    }]
})

module.exports = new Model("Mountain", MountainSchema)