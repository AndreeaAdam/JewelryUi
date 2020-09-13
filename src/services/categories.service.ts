import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api-service';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiService<Category>{

  constructor(http: HttpClient) {
    super(http);
    this.endpoint = '/api/categories';
  }
}
