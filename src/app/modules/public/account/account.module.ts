import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { PasswordRecoverComponent } from './pages/password-recover/password-recover.component';


@NgModule({
  declarations: [
    LoginComponent,
    PasswordRecoverComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
