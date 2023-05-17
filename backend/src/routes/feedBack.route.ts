import express from "express";
import {createFeedBack} from "../controllers/feedBack.controller.js";
const router = express.Router();


router.post('/createFeedBack', createFeedBack);

export default router;