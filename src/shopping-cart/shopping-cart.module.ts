import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";



@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule
  ]
})
export class ShoppingCartModule { }
