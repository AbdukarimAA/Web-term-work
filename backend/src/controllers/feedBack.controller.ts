import {NextFunction, Request, Response} from "express";
import FeedBackModel from "../models/feedBack.model.js";

export const createFeedBack = async (req: Request, res: Response, next: NextFunction) => {
    const newFeed = new FeedBackModel({
        ...req.body,
    });

    try {
        const savedPulse = await newFeed.save();
        res.status(201).send(savedPulse);
    } catch (error: any) {
        next(error);
    }
};