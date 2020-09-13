import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {TableModule} from 'primeng/table';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [UserComponent, UserEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ]
})
export class UsersModule {
}
