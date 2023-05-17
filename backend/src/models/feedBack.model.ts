import mongoose, { Schema, model, connect } from 'mongoose';

const feedBackSchema = new Schema<IFeedBack>({
    username: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
}, {timestamps: true});

export interface IFeedBack extends mongoose.Document{
    id?: string,
    username: string,
    email: string,
    message: string,
    _doc?: any
}

export default mongoose.model('FeedBack', feedBackSchema);