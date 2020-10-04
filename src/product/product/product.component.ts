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
    public authService: AuthenticationService
  ) {
  }

  public productsPage: Page<Product>;
  public products: Product[] = [];
  public categories: Category[] = [];
  public genders:Gender[] = [];
  public loading: boolean = false;

  ngOnInit(): void {

    this.refreshList();
  }

  refreshList(): void {
    this.categoriesService.getAll().subscribe(categories => this.categories = categories);
    this.gendersService.getAll().subscribe(genders => this.genders = genders);
    this.service.getAll().subscribe(value => this.products = value);
    this.categoriesService.getAll().subscribe(categories => {
      this.categories = categories;
      this.service.getAll().subscribe(value => this.products = value);

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

  addToShoppingCart(id: number): void {

  }

  loadProducts(event: LazyLoadEvent): void {
    this.loading = true;
    this.service.getAllPage(event.first / event.rows, event.rows).subscribe(value => {
      this.productsPage = value;
      this.loading = false;
    });
  }
}
