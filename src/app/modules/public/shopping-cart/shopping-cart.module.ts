import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './pages/cart-page.component';
import { ItemComponent } from './components/item/item.component';



@NgModule({
  declarations: [
    CartPageComponent,
    ItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShoppingCartModule { }
