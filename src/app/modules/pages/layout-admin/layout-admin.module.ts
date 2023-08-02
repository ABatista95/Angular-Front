import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutAdminRoutingModule } from './layout-admin-routing.module';
import { LayoutAdminComponent } from './layout-admin.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { PageColorModule } from "../../admin/page-color/page-color.module";


@NgModule({
  declarations: [
    LayoutAdminComponent
  ],
  imports: [CommonModule, PageColorModule, LayoutAdminRoutingModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule]
})
export class LayoutAdminModule { }
