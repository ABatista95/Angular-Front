import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutPageComponent } from './layout-page.component';

// Importaciónes de libreria alyle
import { LyButtonModule } from "@alyle/ui/button";
import { LyMenuModule } from "@alyle/ui/menu";


@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    LyButtonModule,
    LyMenuModule,

    LayoutRoutingModule,

  ]
})
export class LayoutModule { }
