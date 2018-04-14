import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;

  editSubscription: Subscription;

  editMode = false;

  index: number;

  item: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editSubscription = this.shoppingListService.startedEditing.subscribe(
      (item: number) => {
        this.editMode = true;
        this.index = item;
        this.item = this.shoppingListService.getIngredient(item);
        this.slForm.setValue({
          name: this.item.name,
          amount: this.item.amount
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const _ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.index, _ingredient);
    } else {
      this.shoppingListService.addIngredient(_ingredient);
    }
    this.editMode = false;
    form.reset();
    console.log('Event to shopping list emitted' + _ingredient);
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.index);
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy() {
    this.editSubscription.unsubscribe();
  }
}
