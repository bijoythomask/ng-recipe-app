import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Tomatoes', 20)
  ];

  public ingredientUpdated = new Subject<Ingredient[]>();

  public startedEditing = new Subject<number>();

  constructor() { }

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientUpdated.next(this.ingredients.slice());
  }

  public addIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientUpdated.next(this.ingredients.slice());
  }

  public updateIngredient(index: number, item: Ingredient) {
     this.ingredients[index]  = item;
     this.ingredientUpdated.next(this.ingredients.slice());
     console.log('item updated' + item);
  }

  public deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientUpdated.next(this.ingredients.slice());
  }
}
