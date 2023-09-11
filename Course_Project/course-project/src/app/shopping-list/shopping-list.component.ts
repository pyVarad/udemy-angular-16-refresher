import { Component } from '@angular/core';
import { Ingredent } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredent[] = [
    new Ingredent('Apple', 5),
    new Ingredent('Tomato', 10)
  ];

}
