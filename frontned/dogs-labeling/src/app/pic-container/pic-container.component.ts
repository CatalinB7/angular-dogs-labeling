import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFetchingService } from '../data-fetching.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-pic-container',
  templateUrl: './pic-container.component.html',
  styleUrls: ['./pic-container.component.css']
})
export class PicContainerComponent implements OnInit {

  @Input() links: string[] | null = [];
  @Input() currentCategory = "";

  constructor(private router: Router,
    private _fetchingService: DataFetchingService,
    private _state: StateService) { }

  ngOnInit(): void {
  }

  goToCategories() {
    this.router.navigateByUrl(`/categories`);
  }

  goToRandomDogs() {
    if (!this.router.url.includes("dogs-pages"))
      this.router.navigateByUrl(`/dogs-pages`);
    else {
      //get data here or tell the parent the child needs new data?
      this._fetchingService.getRandomData(this._state.noPics).subscribe( (obs: any) => {
        this.links = obs.message;
      })
    }
  }

}
