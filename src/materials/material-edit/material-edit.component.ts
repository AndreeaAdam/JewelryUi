import {Component, OnInit} from '@angular/core';
import {Material} from '../../model/material';
import {MaterialsService} from '../../services/materials.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.css']
})
export class MaterialEditComponent implements OnInit {
  public material: Material = new Material();
  private id: number;

  constructor(
    private service: MaterialsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.id = parseInt(params.get('id'), 10);
        this.service.getById(this.id).subscribe(value => this.material = value);

      });
  }

  save(): void {
    this.service.save(this.material).subscribe(value => this.material = value);
    this.gotolist();
  }

  cancel(): void {
    this.gotolist();
  }

  gotolist(): void {
    const url = '/materials';
    this.router.navigateByUrl(url);
  }

}
