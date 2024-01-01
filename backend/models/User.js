const mongoose=require('mongoose');
const bcrypt = require('bcrypt')


const userSchema=mongoose.Schema({
name:{
    type: String,
    required:true,
    unique:true
},
email:{
    type: String,
    required:true,
    unique:true
},
password:{
    type: String,
    required:true
}
},//end of schema 

{
timestamps:true
}
)

userSchema.methods.verifyPassword = function(password){
    console.log('Verifying Password: ', password)
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User