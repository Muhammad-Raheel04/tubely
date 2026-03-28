import express from 'express';
import { getLatestVideo } from '../controllers/videoController.js';

const router=express.Router();

router.get('/latest',getLatestVideo);

export default router;

