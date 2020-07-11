const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { String, Number, Boolean, ObjectId, Date } = Schema.Types;

const MountainSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
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
}, 
{ timestamps: true }
);

module.exports = mongoose.model("Mountain", MountainSchema)