const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const {String, Number, Boolean, ObjectId, Date} = Schema.Types;

const HutSchema = new Schema({

})

module.exports = mongoose.model("Hut", HutSchema)