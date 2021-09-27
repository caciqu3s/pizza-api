import { IngredientRequest } from "./ingredient-request";

export class PizzaRequest {
    name!: string;
    ingredients!: IngredientRequest[];
}