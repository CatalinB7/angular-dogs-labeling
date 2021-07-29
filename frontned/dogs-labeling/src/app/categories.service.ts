import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { StateService } from './state.service';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http: HttpClient,
    private _state: StateService) { }

  getCategories() {
    return this._http.get<{categories: string[]}>(`${baseUrl}/category`, {
      params: {
        name: this._state.Name,
        id: this._state.SessionId
      },
      observe: 'response'
    })
  }

  insertInCategory(link: string, category: string) {
    //saves a link associated with a category
    return this._http.post(`${baseUrl}/preferences`,
      { id: this._state.SessionId, link, name: this._state.Name, category }, {responseType: 'text'});
  }

  insertCategory(category: string) {
    return this._http.post(`${baseUrl}/category`,
    { id: this._state.SessionId, name: this._state.Name, category }, {responseType: 'text'});
  }

  deleteCategory(category: string) {
    let params = { id: this._state.SessionId.toString(), name: this._state.Name, category };
    return this._http.delete(`${baseUrl}/category?${new URLSearchParams(params)}`, {responseType: 'text'});
  }

  editCategory(oldCategory: string, newCategory: string) {
    let params = { id: this._state.SessionId.toString(), name: this._state.Name, oldCategory, newCategory };
    return this._http.put(`${baseUrl}/category?${new URLSearchParams(params)}`, {}, {responseType: 'text'});
  }

  getLinksByCategory (category: string) {
    const httpOptions = {
      headers: new HttpHeaders({responseType: 'text'})
    };
    let params = { id: this._state.SessionId.toString(), name: this._state.Name, category };
    return this._http.get (`${baseUrl}/preferences?${new URLSearchParams(params)}`, {responseType: 'text'});
  }

  removeLink(category: string, link: string) {
    let params = { id: this._state.SessionId.toString(), name: this._state.Name, category, link };
    return this._http.delete(`${baseUrl}/preferences?${new URLSearchParams(params)}`, {responseType: 'text'});
  }

}
