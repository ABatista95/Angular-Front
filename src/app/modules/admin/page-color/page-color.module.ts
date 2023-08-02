import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageColorComponent } from './page-color.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    PageColorComponent
  ], imports: [CommonModule, MatDividerModule, MatButtonModule, MatIconModule, MatButtonToggleModule, FormsModule],
  exports: [PageColorComponent]
})
export class PageColorModule { }
