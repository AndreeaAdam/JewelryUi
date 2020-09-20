import {Component, OnInit} from '@angular/core';
import {Gemstone} from '../../model/gemstone';
import {GemstonesService} from '../../services/gemstones.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-gemstone-edit',
  templateUrl: './gemstone-edit.component.html',
  styleUrls: ['./gemstone-edit.component.css']
})
export class GemstoneEditComponent implements OnInit {
  public gemstone: Gemstone = new Gemstone();
  private id: number;

  constructor(
    private service: GemstonesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.id = parseInt(params.get('id'), 10);
        this.service.getById(this.id).subscribe(value => this.gemstone = value);
      });
  }

  save(): void {
    this.service.save(this.gemstone).subscribe(value => {
      this.gemstone = value;
      this.goToList();
    });
  }

  cancel(): void {
    this.goToList();
  }

  goToList(): void {
    const url = '/gemstones';
    this.router.navigateByUrl(url);
  }
}
