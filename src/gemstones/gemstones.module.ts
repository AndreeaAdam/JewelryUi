import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GemstoneComponent } from './gemstone/gemstone.component';
import { GemstoneEditComponent } from './gemstone-edit/gemstone-edit.component';
import {RouterModule} from '@angular/router';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [GemstoneComponent, GemstoneEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ]
})
export class GemstonesModule { }
