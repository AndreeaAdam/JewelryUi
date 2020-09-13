import {Component, OnInit} from '@angular/core';
import {Material} from '../../model/material';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  public materials: Material[] = [
    {id: 1, name: 'Gold'},
    {id: 2, name: 'Sterling Silver'},
    {id: 3, name: 'Rose Gold'},
    {id: 4, name: 'White Gold'},
    {id: 5, name: 'Platinum'},
    {id: 6, name: 'Steel'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
