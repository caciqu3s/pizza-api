import { Router } from "express";
import { getIngredients, getIngredientsById, saveIngredient, updateIngredient } from "./services/ingredient-service";
import { deletePizza, getPizzaById, getPizzas, savePizza, updatePizza } from "./services/pizza-service";

const routes = Router();

routes.route('/pizza')
    .post(savePizza)
    .get(getPizzas);

routes.route('/ingredients')
    .post(saveIngredient)
    .get(getIngredients);

routes.route('/pizza/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

routes.route('ingredients/:id')
    .get(getIngredientsById)
    .put(updateIngredient);

export default routes;