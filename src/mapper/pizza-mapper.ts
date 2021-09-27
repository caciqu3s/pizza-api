import { Ingredient } from "../models/ingredient";
import { Ingredients } from "../models/ingredients";
import { PizzaRequest } from "../models/pizza-request";
import { IngredientSchema } from "../schemas/ingredient-schema";

export const toPizza = async (request: PizzaRequest) => {
    let ingredients = new Array<Ingredients>();
    for(let ingredient of request.ingredients) {
        ingredients.push({
            quantity: ingredient.quantity,
            ingredient: await IngredientSchema.findById(ingredient.ingredientId).exec() as Ingredient
        })
    }
    return { name: request.name, ingredients };
}