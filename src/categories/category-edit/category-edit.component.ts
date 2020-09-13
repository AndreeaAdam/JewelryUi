import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  public category: Category;

  constructor() {
  }

  ngOnInit(): void {
  }

}
