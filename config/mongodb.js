import mongoose from "mongoose";

const conectDB=()=>{
	 
	mongoose.connect(`${process.env.MONGODB_URI}/doctor-managment-system`).then(()=>console.log('connecte')).catch((er)=>console.log(er));
}

export default conectDB
