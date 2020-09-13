import {Injectable} from '@angular/core';
import {ApiService} from './api-service';
import {ProductGemstone} from '../model/product-gemstone';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductGemstonesService extends ApiService<ProductGemstone> {

  constructor(http: HttpClient) {
    super(http);
    this.endpoint = '/api/product-gemstones';
  }
}
