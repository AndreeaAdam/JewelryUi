import { Injectable } from '@angular/core';
import {ApiService} from './api-service';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService<User>{

  constructor(http: HttpClient, private authService: AuthenticationService) {
    super(http);
    this.endpoint = '/api/users';
  }
  public beforeSave(item: User): void {
    if (!item.isAdministrator) {
      item.isAdministrator = false;
    }
  }
  public authenticate(username: string, password: string) {
    const url = this.API_SERVICE + this.endpoint + '/authenticate';
    const user = new User();
    user.userName = username;
    user.password = password;
    this.http.post<User>(url, user).subscribe(authenticatedUser => {
      this.authService.authenticatedUser = authenticatedUser;
    }, error => {
      console.error(error);
    });
  }
}
