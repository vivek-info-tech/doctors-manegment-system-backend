//Api for add doctors
import bcrypt from 'bcrypt'
import validator from 'validator'
import { v2 } from 'cloudinary'
import doctorModel from '../models/doctermodels.js'


const addDoctor=async (req,res)=>{
    try{
        const {name,email,password, speciality,degree, experience , about, fees, address}=req.body
        const imageFile=req.file
       
        //checking for all data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience|| !about || !fees || !address ){
            return res.json({success:false , message:"Missing Details"})
        }

        //validating email format
        if(!validator.isEmail(email)){

            return res.json({success:false , message:"Please enter a vailid email"})
        }

        //validating Strong password
        if(!password.length < 8){

            return res.json({success:false , message:"Please enter a strong password"})
        }
        // hashing doctor password
        const salt =await bcrypt.genSalt(10)
        const hashedPassword =await bcrypt.hash(password,salt)

        //uplod image to cloudinary
        const imageUpload =await v2.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl =imageUpload.secure_url
        const doctorData ={
            name,
            email,
            password,
            speciality,
            degree,
            experience,
            about,
            fees,
            address
        }

        const newDoctor =new doctorModel(doctorData)

    } catch(erorr){

    }
}

export default addDoctor