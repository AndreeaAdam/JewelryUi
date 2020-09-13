import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  public product: Product = new Product();
  public categories: Array<{ label: string, value: string }> = [
    {label: 'Ring', value: '1'},
    {label: 'Bracelet', value: '2'},
    {label: 'Earring', value: '3'},
    {label: 'Necklace & Pendant', value: '4'},
    {label: 'Charm', value: '5'}
  ];
  public genders: Array<{ label: string, value: string }> = [
    {label: 'Women', value: '1'},
    {label: 'Men', value: '2'},
    {label: 'Other', value: '3'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
