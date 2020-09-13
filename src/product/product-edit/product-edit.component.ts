import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {CategoriesService} from '../../services/categories.service';
import {GendersService} from '../../services/genders.service';
import {Category} from '../../model/category';
import {Gender} from '../../model/gender';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  public product: Product = new Product();
  private id: number;
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
    this.categoryService.getAll().subscribe(category => {
      this.categories = category;
      this.route.paramMap
        .subscribe(params => {
          this.id = parseInt(params.get('id'), 10);
          this.service.getById(this.id).subscribe(value => this.product = value);
        });
    });
    this.genderService.getAll().subscribe(gender => {
      this.genders = gender;
      this.route.paramMap
        .subscribe(params => {
          this.id = parseInt(params.get('id'), 10);
          this.service.getById(this.id).subscribe(value => this.product = value);
        });
    });
  }

  save(): void {
    this.service.save(this.product).subscribe(value => this.product = value);
    this.gotolist();
  }

  cancel(): void {
    this.gotolist();
  }

  gotolist(): void {
    const url = '/products';
    this.router.navigateByUrl(url);
  }

}
