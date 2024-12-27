import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoutes.js';


//app configration 
const app=express();
const port=process.env.PORT || 4000
connectDB()
connectCloudinary()
 
//middlewares
app.use(express.json())
app.use(cors())


//api end points
app.get('/', (req,res)=>{
	res.send('APi is working fine')
})

app.use('/api/admin', adminRouter )

app.listen(port,
	console.log(
		"Server Started and good",port
	)
)