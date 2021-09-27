import mongoose from 'mongoose';

export default function connect(): void {
    mongoose.connect(process.env.DATABASE ? process.env.DATABASE : 'localhost').catch((error) => console.error(error));
}