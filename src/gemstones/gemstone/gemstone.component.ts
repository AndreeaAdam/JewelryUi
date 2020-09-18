import {Component, OnInit} from '@angular/core';
import {Gemstone} from '../../model/gemstone';
import {Router} from '@angular/router';
import {GemstonesService} from '../../services/gemstones.service';

@Component({
  selector: 'app-gemstone',
  templateUrl: './gemstone.component.html',
  styleUrls: ['./gemstone.component.css']
})
export class GemstoneComponent implements OnInit {
  public gemstones: Gemstone[] = [];
  constructor(
    private router: Router,
    private service: GemstonesService
  ) {
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(value => this.gemstones = value);

  }
  add(): void {
    const url = '/gemstones-edit/0';
    this.router.navigateByUrl(url);
  }

}
