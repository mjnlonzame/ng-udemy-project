import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Tortang Talong', 'Ketogenic tortang talong', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
         [new Ingredient("Talong", 2), new Ingredient("Egg", 1), new Ingredient("Almond Flour", 1)]),
        new Recipe('Avocado - Strawberry Smoothie', 'keto keto keto', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Ingredient("Avocado", 1), new Ingredient("Strawberry", 5), new Ingredient("All purpose cream", 1), new Ingredient("Stevia", 1)])
      ];
    
    constructor(private shoppingListService : ShoppingListService){

    }

    getRecipes = function(){
        return this.recipes.slice();
    } 

    addIngredientsToShoppingList = function(ingredients : Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}