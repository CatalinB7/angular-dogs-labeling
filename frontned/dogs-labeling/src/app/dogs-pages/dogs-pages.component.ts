import { Component, OnInit } from '@angular/core';
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
  constructor(private state: StateService, 
    private fetchingService: DataFetchingService) { }

  ngOnInit(): void {
    this.name = this.state.Name;
    // console.log("name = ", this.name);
    this.getNewDogs();
  }

  getNewDogs() {
    this.fetchingService.getRandomData(this.state.NoPics)
    .subscribe((resp: any) => this.links = resp.message);
  }

}
