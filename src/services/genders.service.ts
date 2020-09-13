import { Injectable } from '@angular/core';
import {ApiService} from './api-service';
import {Gender} from '../model/gender';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GendersService extends ApiService<Gender>{

  constructor(http: HttpClient) {
    super(http);
    this.endpoint = '/api/genders';
  }
}
