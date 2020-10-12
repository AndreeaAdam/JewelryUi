import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputNumberModule} from 'primeng/inputnumber';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputNumberModule,
    FormsModule
  ]
})
export class CartModule { }
