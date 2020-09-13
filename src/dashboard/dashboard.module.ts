import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BrowserModule} from '@angular/platform-browser';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    BrowserModule,
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ]
})
export class DashboardModule {
}
