import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product/product.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {RouterModule} from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';
import {ProductsService} from '../services/products.service';
import {HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [ProductComponent, ProductEditComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    RouterModule,
    DropdownModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductModule {
}
