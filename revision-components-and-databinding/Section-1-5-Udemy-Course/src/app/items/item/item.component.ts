import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemSpec } from 'src/model/shopping-list.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input('item') shoppingKartItem: ItemSpec;
  @Output('triggerAddItem') addItems = new EventEmitter<ItemSpec>();

  addItemHandler(event: ItemSpec) {
    this.addItems.emit(event);
  }
}
