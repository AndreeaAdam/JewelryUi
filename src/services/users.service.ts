import {Injectable} from '@angular/core';
import {ApiService} from './api-service';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService<User> {

  constructor(http: HttpClient) {
    super(http);
    this.endpoint = '/api/users';
  }

  public beforeSave(item: User): void {
    if (!item.administrator) {
      item.administrator = false;
    }
  }

  public authenticate(userName: string, password: string): Observable<User> {
    const url = this.API_SERVICE + this.endpoint + '/authenticate';
    const user = new User();
    user.userName = userName;
    user.password = password;
    return this.http.put<User>(url, user);
  }
}
