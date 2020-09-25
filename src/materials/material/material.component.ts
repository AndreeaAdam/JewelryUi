import {Component, OnInit} from '@angular/core';
import {Material} from '../../model/material';
import {MaterialsService} from '../../services/materials.service';
import {Router} from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  public materials: Material[] = [];

  constructor(
    private service: MaterialsService,
    private router: Router,
    private confirmationService: ConfirmationService,
    public authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.service.getAll().subscribe(value => this.materials = value);

  }
  delete(id: number): boolean {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this item?',
      accept: () => {
        this.service.delete(id).subscribe(value => this.refreshList());
      }
    });
    return false;
  }

  add(): void {
    const url = '/materials-edit/0';
    this.router.navigateByUrl(url);
  }

}
