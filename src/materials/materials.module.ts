import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialComponent} from './material/material.component';
import {MaterialEditComponent} from './material-edit/material-edit.component';
import {TableModule} from 'primeng/table';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MaterialsService} from '../services/materials.service';


@NgModule({
  declarations: [MaterialComponent, MaterialEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [
    MaterialsService
  ]
})
export class MaterialsModule {
}
