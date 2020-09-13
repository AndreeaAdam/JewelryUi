import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() {
  }

  public categories: Category[] = [
    {id: 1, name: 'Ring'},
    {id: 2, name: 'Bracelet'},
    {id: 3, name: 'Earring'},
    {id: 4, name: 'Necklace & Pendant'},
    {id: 5, name: 'Charm'},
    {id: 6, name: 'Watch'},
  ];

  ngOnInit(): void {
  }

}
