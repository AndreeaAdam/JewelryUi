import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule
  ]
})
export class LoginModule { }
