import { Injectable } from '@angular/core';
import {ApiService} from './api-service';
import {ProductMaterial} from '../model/product-material';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductMaterialService extends ApiService<ProductMaterial>{
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = '/api/product-materials';
  }
}
