import { Injectable } from '@angular/core';
import {ApiService} from './api-service';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService<User>{

  constructor(http: HttpClient) {
    super(http);
    this.endpoint = '/api/users';
  }
  public beforeSave(item: User): void {
    if (!item.isAdministrator) {
      item.isAdministrator = false;
    }
  }
}
