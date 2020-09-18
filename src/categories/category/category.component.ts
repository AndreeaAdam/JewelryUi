import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {Router} from '@angular/router';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private router: Router,
    private service: CategoriesService) {
  }
  public categories: Category[] = [];

  ngOnInit(): void {
    this.service.getAll().subscribe(value => this.categories = value);
  }

  add(): void {
    const url = '/categories-edit/0';
    this.router.navigateByUrl(url);
  }

}
