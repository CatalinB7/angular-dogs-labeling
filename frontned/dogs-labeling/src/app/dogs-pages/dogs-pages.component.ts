import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFetchingService } from '../data-fetching.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-dogs-pages',
  templateUrl: './dogs-pages.component.html',
  styleUrls: ['./dogs-pages.component.css']
})
export class DogsPagesComponent implements OnInit {
  name = "";
  links = [];
  constructor(private _state: StateService, 
    private _fetchingService: DataFetchingService,
    private _router: Router) { }

  ngOnInit(): void {
    this.name = this._state.Name;
    this.getNewDogs();
  }

  getNewDogs() {
    this._fetchingService.getRandomData(this._state.NoPics)
    .subscribe((resp: any) => this.links = resp.message);
  }

  goToCategories() {
    this._router.navigateByUrl(`/categories`);
  }

}
