import { Injectable } from '@angular/core';
import {ApiService} from './api-service';
import {Gemstone} from '../model/gemstone';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GemstonesService extends ApiService<Gemstone>{

  constructor(http: HttpClient) {
    super(http);
    this.endpoint = '/api/gemstones';
  }
}
