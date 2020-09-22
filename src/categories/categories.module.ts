import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from './category/category.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {RouterModule} from '@angular/router';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CategoriesService} from '../services/categories.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';


@NgModule({
  declarations: [CategoryComponent, CategoryEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule
  ],
  providers: [
    CategoriesService,
    ConfirmationService
  ]
})
export class CategoriesModule {
}
