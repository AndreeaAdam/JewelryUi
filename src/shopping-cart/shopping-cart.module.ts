import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputNumberModule} from 'primeng/inputnumber';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputNumberModule,
    FormsModule
  ]
})
export class ShoppingCartModule { }
