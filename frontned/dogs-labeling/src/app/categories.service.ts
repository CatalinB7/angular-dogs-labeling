import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { StateService } from './state.service';

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
export class CategoriesService {

  constructor(private http: HttpClient,
    private state: StateService) { }

  getCategories() {
    return this.http.get(`${baseUrl}/category`, {
      params: {
        name: this.state.Name,
        id: this.state.SessionId
      },
      observe: 'response'
    })
  }

}
