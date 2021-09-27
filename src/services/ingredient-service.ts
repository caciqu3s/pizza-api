import { Request, Response } from "express";
import { Ingredient } from "../models/ingredient";
import { IngredientSchema } from "../schemas/ingredient-schema";

export const saveIngredient = async (request: Request, response: Response) => {
    const ingredient = await IngredientSchema.create(request.body);
    return response.status(201).json({ ingredient });
}

export const getIngredients = async (request: Request, response: Response) => {
    const ingredients = await IngredientSchema.find();
    return response.json({ ingredients });
}

export const getIngredientsById = async (request: Request, response: Response) => {
    const ingredient = await IngredientSchema.findById(request.params.id).exec();
    return response.json({ ingredient });
}

export const updateIngredient = async (request: Request, response: Response) => {
    const ingredient = await IngredientSchema.findByIdAndUpdate(request.params.id, request.body);
    return response.json({ ingredient });
}