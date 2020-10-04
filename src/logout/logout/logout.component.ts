import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  public user: User = new User();

  constructor(private userService: UsersService,
              private router: Router,
              private auth: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  yes(): void {
   this.auth.authenticatedUser = undefined;
   if(true)
    this.router.navigateByUrl('#');

  }

  no(): void {
    this.router.navigateByUrl('');

  }
}
