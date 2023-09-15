import { Component, Output, EventEmitter } from '@angular/core';
import { ItemSpec } from 'src/model/shopping-list.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  @Output('triggerItemAddedToKart') itemAddedToKart = new EventEmitter<ItemSpec>();

  items: ItemSpec[] = [
    new ItemSpec(
      101,
      'Pencil',
      'Apsara Platinum Extra Dark Pencil is made from high-quality wood for clean and easy sharpening. Its strong medium-soft lead produces long-lasting, smooth and readable dark strokes without smudging.',
      'https://rukminim2.flixcart.com/image/416/416/kabe9ow0/pencil/x/g/g/matt-magic-pencils-pack-of-50-apsara-original-imafrwb6zzkgqdye.jpeg?q=70'
    ),
    new ItemSpec(
      102,
      'Pen',
      'Parker pens are exquisitely crafted fine writing instruments with a rich history of innovation and belief in the importance of the written word.',
      'https://assetscdn1.paytm.com/images/catalog/product/S/ST/STAPARKER-VECTOGLOB69852AA25F82/1563558976897_1..jpg'
    ),
    new ItemSpec(
      103,
      'Macbook Cover',
      'Protect and personalize your MacBook with Incase\'s lightweight, form-fitting Hardshell Case. It delivers protection without sacrificing access to ports, lights, and buttons. This durable MacBook cover also offers sophisticated styling, injection-molded construction, and rubberized feet to keep your laptop cool and firmly in place.',
      'https://rukminim2.flixcart.com/image/850/1000/xif0q/cases-covers/front-back-case/o/o/r/m1-a2337-a2179-a1932-2020-2019-2018-verilux-original-imaghykkfyycebuz.jpeg?q=90'
    )
  ];

  addedItemsToList(data: ItemSpec) {
    this.itemAddedToKart.emit(data);
  }
}
