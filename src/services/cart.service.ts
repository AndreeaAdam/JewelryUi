import {Injectable} from '@angular/core';
import {ApiService} from "./api-service";
import {Cart} from "../model/cart";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService extends ApiService<Cart> {

  constructor(http: HttpClient) {
    super(http);
    this.endpoint = '/api/carts';
  }

  items = [];

  addToCart(item: Cart) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
