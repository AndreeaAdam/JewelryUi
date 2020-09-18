import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private router: Router,
    private service: UsersService) {
  }
  public users: User[] = [];

  ngOnInit(): void {
    this.service.getAll().subscribe(value => this.users = value);
  }
  add(): void {
    const url = '/users-edit/0';
    this.router.navigateByUrl(url);
  }

}
