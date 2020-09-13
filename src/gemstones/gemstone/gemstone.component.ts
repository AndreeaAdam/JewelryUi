import {Component, OnInit} from '@angular/core';
import {Gemstone} from '../../model/gemstone';

@Component({
  selector: 'app-gemstone',
  templateUrl: './gemstone.component.html',
  styleUrls: ['./gemstone.component.css']
})
export class GemstoneComponent implements OnInit {
  public gemstones: Gemstone[] = [
    {id: 1, name: 'Diamond'},
    {id: 2, name: 'Rubie'},
    {id: 3, name: 'Tiger\'s eye'},
    {id: 4, name: 'Opal'},
    {id: 5, name: 'No gemstone'},
    {id: 6, name: 'Yellow diamond'},
    {id: 7, name: 'Pearl'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
