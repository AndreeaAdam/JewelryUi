import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {PasswordModule} from "primeng/password";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {UsersService} from "../services/users.service";
import {ConfirmationService} from "primeng/api";


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    ConfirmDialogModule
  ],
  providers: [
    UsersService,
    ConfirmationService
  ]
})
export class RegisterModule {
}
