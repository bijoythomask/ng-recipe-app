import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  _id: number;

  constructor(private recipeService: RecipeService,
              private acitvtedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.acitvtedRoute.params.subscribe(
      (params: Params) => {
        this._id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this._id);
      }
    );
  }
  addtoShoppingList() {
    this.recipeService.addtoShoppingList(this.recipe);
  }

  onEditRecipe() {
    console.log('Navigating to edit');
    this.router.navigate(['edit'], {relativeTo: this.acitvtedRoute});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this._id);
    this.router.navigate(['/recipes']);
  }

}
