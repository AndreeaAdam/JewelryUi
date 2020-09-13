import {Component, OnInit} from '@angular/core';
import {Gemstone} from '../../model/gemstone';

@Component({
  selector: 'app-gemstone-edit',
  templateUrl: './gemstone-edit.component.html',
  styleUrls: ['./gemstone-edit.component.css']
})
export class GemstoneEditComponent implements OnInit {
  public gemstone: Gemstone = new Gemstone();

  constructor() {
  }

  ngOnInit(): void {
  }

}
