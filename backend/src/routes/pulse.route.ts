import express from "express";
import {createPulse, getAllPulse, getPulse} from "../controllers/pulse.controller.js";
const router = express.Router();


router.post('/createPulse', createPulse);
router.get('/getPulse/:id', getPulse);
router.get('/getAllPulse', getAllPulse);

export default router;