import mongoose from "mongoose";



const UserSchema= new mongoose.Schema({
    name:{
        require: true,
        type:String

    },
    email:{
        require: true,
        type:String,
        unique: true
        
    }, 
    password:{
        require: true,
        minlength: 6,
        type:String

    }
},{timestamps:true})

export default User= mongoose.model("user",UserSchema)
