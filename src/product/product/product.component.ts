import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductsService} from '../../services/products.service';
import {Router} from '@angular/router';
import {Category} from '../../model/category';
import {Gender} from '../../model/gender';
import {CategoriesService} from '../../services/categories.service';
import {GendersService} from '../../services/genders.service';
import {ConfirmationService, LazyLoadEvent} from 'primeng/api';
import {AuthenticationService} from "../../services/authentication.service";
import {Page} from "../../model/page";
import {CartService} from "../../services/cart.service";
import {Cart} from "../../model/cart";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private router: Router,
    private service: ProductsService,
    private categoriesService: CategoriesService,
    private gendersService: GendersService,
    private confirmationService: ConfirmationService,
    public authService: AuthenticationService,
    private cartService: CartService
  ) {
  }

  public productsPage: Page<Product>;
  public products: Product[] = [];
  public categories: Category[] = [];
  public genders: Gender[] = [];
  public loading: boolean = false;


  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(pageNr = 0, pageSize = 100): void {
    this.categoriesService.getAll().subscribe(categories => this.categories = categories);
    this.gendersService.getAll().subscribe(genders => this.genders = genders);
    this.service.getAllPage().subscribe(value => this.productsPage = value);
    this.categoriesService.getAll().subscribe(categories => {
      this.categories = categories;
      this.service.getAllPage(pageNr, pageSize).subscribe(value => this.productsPage = value);

    });
  }

  delete(id: number): boolean {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this item?',
      accept: () => {
        this.service.delete(id).subscribe(value => this.refreshList());
      }
    });
    return false;
  }

  add(): void {
    const url = '/products-edit/0';
    this.router.navigateByUrl(url);
  }

  getCategoryName(id: number): string {
    const categoryModel = this.categories.find(category => category.id === id);
    if (categoryModel.id === 0) {
      categoryModel.name = 'N/A';
    }
    return categoryModel ? categoryModel.name : 'N/A';
  }

  getGenderType(id: number): string {
    const genderModel = this.genders.find(gender => gender.id === id);
    if (genderModel.id === 0) {
      genderModel.type = 'N/A';
    }
    return genderModel ? genderModel.type : 'N/A';
  }

  addToShoppingCart(product: Product): void {
    let item: Cart = new Cart();
    item.productId = product.id;
    item.userId = this.authService.authenticatedUser.id;
    item.price = product.price;
    item.sold = false;
    item.payed = false;
    item.quantity = product.quantity;
    console.log(item);
    this.cartService.addToCart(item);
  }

  loadProducts(event: LazyLoadEvent): void {
    this.refreshList(event.first / event.rows, event.rows);
  }

}
