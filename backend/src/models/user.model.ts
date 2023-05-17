import mongoose, { Schema, model, connect } from 'mongoose';

const userSchema = new Schema<IUser>({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}, {timestamps: true});

export interface IUser extends mongoose.Document{
    id?: string,
    username: string,
    email: string,
    password: string,
    _doc?: any
}

export default mongoose.model('User', userSchema);