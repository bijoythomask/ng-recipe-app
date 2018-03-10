import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') name: ElementRef;

  @ViewChild('inputAmount') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addtoShoppingList() {
    const _name = this.name.nativeElement.value;
    const _amount = this.amount.nativeElement.value;
    const _ingredient = new Ingredient(_name, _amount);
    this.shoppingListService.addIngredient(_ingredient);
    console.log('Event to shopping list emitted' + _ingredient);
  }

}
