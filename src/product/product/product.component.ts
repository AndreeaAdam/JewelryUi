import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductsService} from '../../services/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private router: Router,
    private service: ProductsService) {
  }

  public products: Product[] = [];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.service.getAll().subscribe(value => this.products = value);

  }
  delete(id: number): void {
    this.service.delete(id).subscribe(value => this.refreshList());
  }

  add(): void {
    const url = '/products-edit/0';
    this.router.navigateByUrl(url);
  }


}
