import mongoose, { Schema, model, connect } from 'mongoose';

const pulseSchema = new Schema<IPulse>({
    name: {type: String, required: true},
    price: {type: String, required: true},
    year: {type: String, required: true},
    imgURL: {type: String, required: true},
    desc: {type: String, required: true},
    brand: {type: String, required: true},
}, {timestamps: true});

export interface IPulse extends mongoose.Document{
    id?: string,
    name: string,
    price: string,
    year: string,
    imgURL: string,
    desc: string,
    brand: string,
    _doc?: any
}

export default mongoose.model('Pulse', pulseSchema);