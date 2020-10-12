import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
import {Cart} from "../../model/cart";
import {Product} from "../../model/product";
import {ProductsService} from "../../services/products.service";
import {User} from "../../model/user";
import {UsersService} from "../../services/users.service";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public display: boolean;
  public quantity: number;
  public value: number = 1;
  public products: Product[] = [];
  public carts: Cart[] = [];
  public user: User[] = [];
  public item: Cart = new Cart();


  constructor(
    private router: Router,
    private service: CartService,
    private productService: ProductsService,
    public authService: AuthenticationService,
    private userService: UsersService) {
  }

  ngOnInit(): void {
    this.carts = this.service.getItems();
    this.productService.getAll().subscribe(product => this.products = product);
    this.userService.getAll().subscribe(user => this.user = user);
  }

  order(cart: Cart): void {
    cart.quantity = this.value;
      this.service.save(cart).subscribe(value => {
      cart = value;
    });
    this.service.clearCart();
    console.log(cart)
    console.log(this.item.quantity)

  }

  showDialog() {
    this.display = true;
  }

  goToHomePage(): void {
    this.router.navigateByUrl("");
  }

  // getProductName(id: number): string {
  //   const prod = this.products.find(product => product.id === id);
  //   if (prod.id === 0) {
  //     prod.name = 'N/A';
  //   }
  //   return prod ? prod.name : 'N/A';
  // }
}