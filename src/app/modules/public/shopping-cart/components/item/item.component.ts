import {Component, Input} from '@angular/core';
import {CartItem} from "../../models/cart-item";

@Component({
  selector: 'app-cart-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() cartItem!: CartItem;
}
