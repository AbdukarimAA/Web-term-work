import {NextFunction, Request, Response} from "express";
import Pulse, {IPulse} from '../models/heartRateMonitor.model.js';


export const createPulse = async (req: Request, res: Response, next: NextFunction) => {
    const newPulse = new Pulse({
        ...req.body,
    });

    try {
        const savedPulse = await newPulse.save();
        res.status(201).send(savedPulse);
    } catch (error: any) {
        next(error);
    }
};

export const getPulse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const pulse = await Pulse.findById(req.params.id)
        res.status(200).send(pulse);
    } catch (error: any) {
        next(error);
    }
};

export const getAllPulse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const queryMovies = await Pulse.find();

        res.status(200).send(queryMovies);
    } catch (error: any) {
        next(error);
    }
}