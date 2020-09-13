import {Injectable} from '@angular/core';
import {ApiService} from './api-service';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiService<Product> {
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = '/api/products';
  }
}
