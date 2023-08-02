import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutPageComponent } from './layout-page.component';

import HeaderComponent from "@shared/components/header/header.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon"; // Esta forma emplea path alias... Lo realiza de manera automatica.
// import HeaderComponent from "../../../shared/components/header/header.component";

@NgModule({
  declarations: [
    LayoutPageComponent
  ], imports: [CommonModule,

    HeaderComponent,

    LayoutRoutingModule, MatSidenavModule, HeaderComponent, HeaderComponent, MatIconModule,]
})
export class LayoutModule { }
