import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {Router} from '@angular/router';
import {CategoriesService} from '../../services/categories.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private router: Router,
    private service: CategoriesService,
    private confirmationService: ConfirmationService) {
  }

  public categories: Category[] = [];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.service.getAll().subscribe(value => this.categories = value);
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
    const url = '/categories-edit/0';
    this.router.navigateByUrl(url);
  }

}
