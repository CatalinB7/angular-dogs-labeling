import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class DataFetchingService {

  constructor(private http: HttpClient) { }
}
