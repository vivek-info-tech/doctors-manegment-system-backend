
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    image:{type:String, required:true},
     
    address:{type:Object, required:true},
    gender:{type:Number, default:"Not Selected"},
    dob:{type:Number, default:"Not Selected"},
    phone:{type:Number, default:"8888888888"},
     
})

const userModel= mongoose.model.doctor || mongoose.model('user',userSchema)

export default userModel

