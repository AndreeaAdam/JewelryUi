import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Product} from '../../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public user: User = new User();
  private id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: UsersService
  ) {
    this.route.paramMap
      .subscribe(params => {
        this.id = parseInt(params.get('id'), 10);
        this.service.getById(this.id).subscribe(value => this.user = value);
      });
  }

  ngOnInit(): void {
  }

  save(): void {
    this.service.save(this.user).subscribe(value => {
      this.user = value;
      this.gotolist();
  });

  }

  cancel(): void {
    this.gotolist();
  }

  gotolist(): void {
    const url = '/users';
    this.router.navigateByUrl(url);
  }

}
