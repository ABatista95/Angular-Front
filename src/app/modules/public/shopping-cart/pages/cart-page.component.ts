import { Component } from '@angular/core';
import {CartItem} from "../models/cart-item";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  listCartItems: CartItem[] = [
    { imageUrl: '#', name: 'Computador', price: 1400000 },
    { imageUrl: '#', name: 'Auriculares SONY', price: 760000 },
    { imageUrl: '#', name: 'Teclado Logitech', price: 250000 },
  ];

}
