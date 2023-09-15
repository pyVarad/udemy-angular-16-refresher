import { Component } from '@angular/core';
import { ItemSpec, ShoppingKartList } from 'src/model/shopping-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Checkout Kart';
  ShoppingKartListItems: ShoppingKartList[] = [];

  updateShoppingKart(data: ItemSpec) {

    const item: ShoppingKartList[] = this.ShoppingKartListItems.filter(filterData => filterData.id === data.id);
    if (item.length > 0) {
      item[0].quantity += 1;
    } else {
      const newShoppingItem: ShoppingKartList = { ...data, quantity: 1 };
      this.ShoppingKartListItems.push(newShoppingItem);
    }
  }
}
