import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {LoginComponent} from "../../login/login/login.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User = new User();

  constructor(
    private service: UsersService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.service.save(this.user).subscribe(value => {
      this.user = value;
    });
    this.goToHomePage();

  }

  goToHomePage(): void {
    this.router.navigateByUrl("");
  }

  cancel(): void {
    this.goToHomePage();
  }

}
