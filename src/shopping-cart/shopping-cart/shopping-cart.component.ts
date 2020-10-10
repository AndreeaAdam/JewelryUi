import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../model/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public items;
  public products: Product;
  display: boolean;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();

  }
  order() : void{
  }
  showDialog() {
    this.display = true;
  }
  goToHomePage(): void {
    this.router.navigateByUrl("");
  }


}
