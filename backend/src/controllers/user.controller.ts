import express, {Request, Response, NextFunction} from "express";
import User, {IUser} from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userExists = await User.findOne({email: req.body.email});
        if(userExists) return res.status(500).json({message: 'User exists'})

        const hash = bcrypt.hashSync(req.body.password, 8);
        const newUser: IUser = new User({
            ...req.body,
            password: hash
        });

        await newUser.save();
        const {password, ...info} = newUser._doc;
        const token = jwt.sign({
            id: newUser._id,
        }, process.env.JWT_KEY as string, {expiresIn: "60d"});

        res.cookie('accessToken', token, {
            maxAge: 60 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: "none"
        }).status(200).send({...info, token});

    } catch (error: any) {
        next(error);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findOne({email: req.body.email});
        if(!user) return res.status(500).json({message: 'User not exists'})

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isCorrect) return res.status(500).json({message: 'Wrong data'})

        const {password, ...info} = user._doc;
        const token = jwt.sign({
            id: user._id,
        }, process.env.JWT_KEY as string, {expiresIn: "24d"});

        res.cookie('accessToken', token, {
            maxAge: 60 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            // secure: true,
            // sameSite: "none"
        }).status(200).send({...info, token});

    } catch (error: any) {
        next(error);
    }
}

export const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie('accessToken', {
            sameSite: "none",
            secure: true
        }).status(200).send('User logged out');

    } catch (error: any) {
        res.status(500).send('Something went wrong');
    }
}