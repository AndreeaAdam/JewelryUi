import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {UsersService} from '../../services/users.service';
import {ConfirmationService} from 'primeng/api';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private router: Router,
    private service: UsersService,
    private confirmationService: ConfirmationService,
    public authService: AuthenticationService
  ) {
  }
  public users: User[] = [];

  ngOnInit(): void {
    this.service.getAll().subscribe(value => this.users = value);
  }
  add(): void {
    const url = '/users-edit/0';
    this.router.navigateByUrl(url);
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

  refreshList(): void {
    this.service.getAll().subscribe(value => this.users = value);
  }

}
