import {Component, OnInit} from '@angular/core';
import {Gemstone} from '../../model/gemstone';
import {Router} from '@angular/router';
import {GemstonesService} from '../../services/gemstones.service';
import {ConfirmationService} from 'primeng/api';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-gemstone',
  templateUrl: './gemstone.component.html',
  styleUrls: ['./gemstone.component.css']
})
export class GemstoneComponent implements OnInit {
  public gemstones: Gemstone[] = [];

  constructor(
    private router: Router,
    private service: GemstonesService,
    private confirmationService: ConfirmationService,
    public authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.service.getAll().subscribe(value => this.gemstones = value);

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
    const url = '/gemstones-edit/0';
    this.router.navigateByUrl(url);
  }

}
