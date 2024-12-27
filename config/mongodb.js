import mongoose from "mongoose";

const conectDB=async()=>{
	mongoose.connection.on("connected",()=>console.log("database is connected"))
	  
	await mongoose.connect(`${process.env.MONGODB_URI}/doctor-managment-system`)
	//console.log(`database is connected ${mongoose.connection.host}`)
}

export default conectDB

