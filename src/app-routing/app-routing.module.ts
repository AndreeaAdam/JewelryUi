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
import {AuthGuard} from '../routeGuards/auth.guard';
import {LoginComponent} from '../login/login/login.component';
import {RegisterComponent} from "../register/register/register.component";

const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductComponent, canActivate: [AuthGuard]},
  {path: 'products-edit/:id', component: ProductEditComponent, canActivate: [AuthGuard]},
  {path: 'categories-edit/:id', component: CategoryEditComponent, canActivate: [AuthGuard]},
  {path: 'categories', component: CategoryComponent, canActivate: [AuthGuard]},
  {path: 'materials-edit/:id', component: MaterialEditComponent, canActivate: [AuthGuard]},
  {path: 'materials', component: MaterialComponent, canActivate: [AuthGuard]},
  {path: 'users-edit/:id', component: UserEditComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'gemstones-edit/:id', component: GemstoneEditComponent, canActivate: [AuthGuard]},
  {path: 'gemstones', component: GemstoneComponent, canActivate: [AuthGuard]}
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
