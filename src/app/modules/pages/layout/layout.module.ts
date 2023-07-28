import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutPageComponent } from './layout-page.component';



import { HeaderComponent } from "../../../shared/components/header/header.component";

@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,

    HeaderComponent,

    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
