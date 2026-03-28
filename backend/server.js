import 'dotenv/config';
import express from 'express';
import videoRoutes from './routes/videoRoutes.js'

const app=express();

app.use('/api/v1/videos',videoRoutes);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`visit http://localhost:${PORT}`);
})