import {Component, OnInit} from '@angular/core';
import {Material} from '../../model/material';
import {MaterialsService} from '../../services/materials.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  public materials: Material[] = [];

  constructor(
    private service: MaterialsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.service.getAll().subscribe(value => this.materials = value);

  }
  delete(id: number): void {
    this.service.delete(id).subscribe(value => this.refreshList());
  }

  add(): void {
    const url = '/materials-edit/0';
    this.router.navigateByUrl(url);
  }

}
