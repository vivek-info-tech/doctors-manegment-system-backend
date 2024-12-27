import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import conectDB from './config/mongodb.js';


//app configration 
const app=express();
const port=process.env.PORT || 4000
  conectDB()
 
//middlewares
app.use(express.json())
app.use(cors())


//api end points

app.get('/',(req,res)=>{
   res.send("API is working and good")
})


app.listen(port,
	console.log(
		"Server Started and good",port
	)
)