import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {UserComponent} from '../../users/user/user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = new User();
  public route: string;

  constructor(private userService: UsersService,
              private router: Router,
              private authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
  }

  doLogin(user: string, password: string): void {
    this.user.userName = user;
    this.user.password = password
    this.userService.authenticate(user,password);

    this.router.navigateByUrl('');
  }
  register(): void{
  }

}
