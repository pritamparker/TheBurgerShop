import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from './../app.config';
import { Observable, throwError } from 'rxjs';
import { Burgers } from '../_models/burgers'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiLink: String = appConfig.apiUrl;
  constructor(private http: HttpClient) { }

  getUserList(): Observable<Burgers[]> {
    return this.http.get<Burgers[]>(this.apiLink + 'burgers');
  }
}
