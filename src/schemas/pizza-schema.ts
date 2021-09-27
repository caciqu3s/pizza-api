import mongoose, { Schema } from "mongoose";
import { Ingredient } from "../models/ingredient";
import { Pizza } from "../models/pizza";
import { IngredientSchema } from "./ingredient-schema";

const schema = new Schema({
    name: String,
    ingredients: [{
        ingredient: IngredientSchema.schema,
        quantity: Number
    }]
});

export const PizzaSchema = mongoose.model<Pizza>('Pizza', schema);