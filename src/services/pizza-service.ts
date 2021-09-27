import { Request, Response } from "express";
import { toPizza } from "../mapper/pizza-mapper";
import { Ingredient } from "../models/ingredient";
import { Ingredients } from "../models/ingredients";
import { PizzaRequest } from "../models/pizza-request";
import { IngredientSchema } from "../schemas/ingredient-schema";
import { PizzaSchema } from "../schemas/pizza-schema";

export const savePizza = async (request: Request<null, null, PizzaRequest>, response: Response) => {
    const pizza = await PizzaSchema.create(toPizza(request.body));
    return response.status(201).json({ pizza });
}

export const getPizzas = async (request: Request, response: Response) => {
    const pizzas = await PizzaSchema.find();
    return response.json({ pizzas });
}

export const getPizzaById = async (request: Request, response: Response) => {
    const pizza = await PizzaSchema.findById(request.params.id).exec();
    return response.json({ pizza });
}

export const updatePizza = async (request: Request, response: Response) => {
    const pizza = await PizzaSchema.findByIdAndUpdate(request.params.id, toPizza(request.body));
    return response.json({ pizza });
}

export const deletePizza = async (request: Request, response: Response) => {
    await PizzaSchema.findByIdAndDelete(request.params.id);
    return response.status(202);
}