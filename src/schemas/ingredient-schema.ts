import mongoose, { Schema } from "mongoose";
import { Ingredient } from "../models/ingredient";

const schema = new Schema({
    name: String,
    description: String
});

export const IngredientSchema = mongoose.model<Ingredient>('Ingredient', schema);