import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { CartPageComponent } from './pages/cart-page.component';
import { ItemComponent } from './components/item/item.component';

// Importaciones librerias externas
import { LyGridModule } from "@alyle/ui/grid";
import { LyButtonModule } from '@alyle/ui/button';
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: '',
    component: CartPageComponent
  }
];

@NgModule({
  declarations: [
    CartPageComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LyGridModule,
    LyButtonModule,
    MatButtonModule
  ]
})
export class ShoppingCartModule { }
