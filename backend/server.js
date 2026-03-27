import 'dotenv/config';
import express from 'express';


const app=express();

app.use('/',(req,res)=>{
    return res.status(200).json({
        success:true,
        message:'tubely api is running',
    })
})
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`visit http://localhost:${PORT}`);
})