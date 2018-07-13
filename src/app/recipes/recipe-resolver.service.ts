import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs/Observable';
import { RecipeService } from './recipe.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {

    constructor(private recipeService: RecipeService, activatedRoute: ActivatedRoute) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe | Observable<Recipe> | Promise<Recipe> {
        console.log('Inside the route resolver method');
        return this.recipeService.getRecipe(+route.params['id']);
    }
}
