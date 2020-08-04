const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 14;

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
    },
    admin:{
        type:Boolean
    }
});


UserSchema.methods = {
    matchPassword:function(password){
        console.log(this.password, "compare")
        return bcrypt.compare(password, this.password);
    }
}

UserSchema.pre('save', function(next){
    console.log("pre");
    if(this.isModified('password')){
        bcrypt.genSalt(saltRounds, (err,salt)=>{
            bcrypt.hash(this.password, salt, (err, hash)=>{
                if(err){
                    next(err);
                    return;
                }
                this.password = hash;
                next();
            })
        })
    }
})


module.exports = mongoose.model("User", UserSchema)