import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPublicComponent } from './components/header-public/header-public.component';



@NgModule({
  declarations: [
    HeaderPublicComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderPublicComponent
  ]
})
export class SharedModule { }
