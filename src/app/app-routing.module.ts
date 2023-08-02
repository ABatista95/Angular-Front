import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: "TingCol | Projecto Home",
    loadChildren: () => import('./modules/pages/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'admin',
    title: "TingCol | Projecto Admin",
    loadChildren: () => import('./modules/pages/layout-admin/layout-admin.module').then(m => m.LayoutAdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
