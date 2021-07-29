import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";

interface IRandomData {
  message: string[];
  status: string;
}

const baseUrl = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataFetchingService {

  constructor(private http: HttpClient) { }

  register(name: string, password: string) {
    return this.http.post(`${baseUrl}/register`, {name, password}, {responseType: 'text'});
  }

  login(name: string, password: string) {
    return this.http.post(`${baseUrl}/login`, {name, password}, httpOptions);
  }

  getRandomData(nb: number) {
    //get pic links
    return this.http.get(`https://dog.ceo/api/breeds/image/random/${nb}`);
  }
}
