import { Recipe } from './recipe.modal';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("A Test Recipe", "This is a test", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"),
        new Recipe("Dal makhni", "OH MAKHNAAAAAA", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636")
      ];

    getRecipes() {
        return this.recipes.slice(); // returns a copy and not a reference i.e. security
    }
}