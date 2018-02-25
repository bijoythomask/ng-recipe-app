import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelectionChanged = new EventEmitter<Recipe>();

  public recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'A test recipe',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
    new Recipe(
      'Mushroom',
      'A Fresh mushroom recipe',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelection(recipe: Recipe) {
    this.recipeSelectionChanged.emit(recipe);
  }

}
