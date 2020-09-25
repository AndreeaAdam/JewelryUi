import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {UsersModule} from '../users/users.module';
import {FormsModule} from '@angular/forms';
import {MessageModule} from "primeng/message";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    UsersModule,
    FormsModule,
    MessageModule
  ]
})
export class LoginModule { }
