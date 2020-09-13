import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard/dashboard.component';
import {ProductComponent} from '../product/product/product.component';
import {ProductEditComponent} from '../product/product-edit/product-edit.component';
import {CategoryEditComponent} from '../categories/category-edit/category-edit.component';
import {CategoryComponent} from '../categories/category/category.component';
import {MaterialEditComponent} from '../materials/material-edit/material-edit.component';
import {MaterialComponent} from '../materials/material/material.component';
import {UserEditComponent} from '../users/user-edit/user-edit.component';
import {UserComponent} from '../users/user/user.component';
import {GemstoneComponent} from '../gemstones/gemstone/gemstone.component';
import {GemstoneEditComponent} from '../gemstones/gemstone-edit/gemstone-edit.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'products', component: ProductComponent},
  {path: 'products-edit/:id', component: ProductEditComponent},
  {path: 'categories-edit/:id', component: CategoryEditComponent},
  {path: 'categories', component: CategoryComponent},
  {path: 'materials-edit/:id', component: MaterialEditComponent},
  {path: 'materials', component: MaterialComponent},
  {path: 'users-edit/:id', component: UserEditComponent},
  {path: 'users', component: UserComponent},
  {path: 'gemstones-edit/:id', component: GemstoneEditComponent},
  {path: 'gemstones', component: GemstoneComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
