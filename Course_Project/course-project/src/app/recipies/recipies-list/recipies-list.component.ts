import { Component } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent {
  recipieList: Recipie[] = [
    new Recipie(
      'Test Recipie', 
      'This is a test recipie', 
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'
      ),
      new Recipie(
        'Test Recipie', 
        'This is a test recipie', 
        'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'
        )
  ]
}
