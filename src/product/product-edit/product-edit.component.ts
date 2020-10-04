import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {CategoriesService} from '../../services/categories.service';
import {GendersService} from '../../services/genders.service';
import {Category} from '../../model/category';
import {Gender} from '../../model/gender';
import {Page} from "../../model/page";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  public product: Product = new Product();
  public categories: Category[] = [];
  public genders: Gender[] = [];

  constructor(
    private categoryService: CategoriesService,
    private genderService: GendersService,
    private router: Router,
    private route: ActivatedRoute,
    private service: ProductsService
  ) {
// radix = baza 10- parseaza in baza 10
  }

  ngOnInit(): void {
    this.getData();
  }

  save(): void {
    this.product.categoryId = this.product.category.id;
    this.product.genderId = this.product.gender.id;
    console.log('Saving model', this.product);
    this.service.save(this.product).subscribe(value => {
      this.product = value;
      this.gotolist();
    });
  }

  cancel(): void {
    this.gotolist();
  }

  gotolist(): void {
    const url = '/products';
    this.router.navigateByUrl(url);
  }


  private getData(): void {
    this.getCategory();
    this.getGender();
    this.getModel();
  }

  private getCategory(): void {
    this.categoryService.getAll().subscribe(category => {
      this.categories = category;
      this.setCategories();
    });
  }

  private getGender(): void {
    this.genderService.getAll().subscribe(gender => {
      this.genders = gender;
      this.setGender();
    });
  }

  private getModel(): void {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'), 10);
      if (id > 0) {
        this.service.getById(id).subscribe(product => {
          console.log(product);
          this.product = product;
          this.setCategories();
          this.setGender();
        });
      }
    });
  }

  private setGender(): void {
    if (this.genders.length > 0 && this.product !== undefined) {
      this.product.gender = this.genders.find
      (gendr => gendr.id === this.product.genderId);
      if (!this.product.gender) {
        this.product.gender = this.genders[0];
      }
    }
  }

  private setCategories(): void {
    if (this.categories.length > 0 && this.product !== undefined) {
      this.product.category = this.categories.find(categ => categ.id === this.product.categoryId);
      if (!this.product.category) {
        this.product.category = this.categories[0];
      }
    }
  }

}
