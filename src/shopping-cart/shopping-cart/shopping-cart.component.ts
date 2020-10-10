import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
import {Product} from "../../model/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  carts;
  cartDetails;
  public items;
  display: boolean;
  public products: Product;
  public total = 0;
  public quantity = 1;
  value : number = 1;
  product: Product;

  constructor(
    private cartService: CartService,
    private router: Router,
    private service: ProductsService) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  order(): void {
    this.service.save(this.product).subscribe(value => --this.product.quantity);
  }

  showDialog() {
    this.display = true;
  }

  goToHomePage(): void {
    this.router.navigateByUrl("");
  }

  getTotalPrice(): void {
    this.total = this.total + this.items.price;
  }
}
