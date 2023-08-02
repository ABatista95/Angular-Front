import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from "./layout-admin.component";
import { PageColorComponent } from "../../admin/page-color/page-color.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent
  },
  {
    path: 'color',
    component: PageColorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutAdminRoutingModule { }
