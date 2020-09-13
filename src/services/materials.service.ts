import { Injectable } from '@angular/core';
import {ApiService} from './api-service';
import {Material} from '../model/material';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService extends ApiService<Material>{

  constructor(http: HttpClient) {
    super(http);
    this.endpoint = '/api/materials';
  }
}
