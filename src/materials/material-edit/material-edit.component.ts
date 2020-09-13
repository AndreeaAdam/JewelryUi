import {Component, OnInit} from '@angular/core';
import {Material} from '../../model/material';

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.css']
})
export class MaterialEditComponent implements OnInit {
  public material: Material;

  constructor() {
  }

  ngOnInit(): void {
  }

}
