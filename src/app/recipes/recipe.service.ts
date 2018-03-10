import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Ta Mystica',
            'A greek delicasy of fish.',
            'https://cdn.stocksnap.io/img-thumbs/960w/G8QICMKLUV.jpg',
            [
                new Ingredient('Fish', 1),
                new Ingredient('Onion', 2)
            ]
        ),
        new Recipe(
          'Mushroom',
          'A Indian delicasy of fresh mushroom.',
          'http://maxpixel.freegreatpicture.com/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg',
          [
            new Ingredient('Mushroos', 10),
            new Ingredient('Spinach', 2)
          ]
        )
      ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    addtoShoppingList(recipe: Recipe) {
        this.shoppingListService.addIngredients(recipe.ingredients);
    }

}
