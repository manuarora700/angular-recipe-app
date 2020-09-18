import { Recipe } from './recipe.modal';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
            "A Test Recipe", 
            "This is a test", 
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
            [
                new Ingredient('Test achaar', 10),
                new Ingredient('Fried', 20)
            ]
            ),
        new Recipe("Dal makhni", "OH MAKHNAAAAAA", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636", 
        [
            new Ingredient('buns', 2),
            new Ingredient('Meat', 22)
        ])
      ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice(); // returns a copy and not a reference i.e. security
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);;
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());

    }
}