import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  public category: Category = new Category();
  private id: number;

  constructor(
    private router: Router,
    private service: CategoriesService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.id = parseInt(params.get('id'), 10);
        this.service.getById(this.id).subscribe(value => this.category = value);
      });
  }

  save(): void {
    this.service.save(this.category).subscribe(value => this.category = value);
    this.gotolist();
  }

  cancel(): void {
    this.gotolist();
  }

  gotolist(): void {
    const url = '/categories';
    this.router.navigateByUrl(url);
  }

}
