import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { CategoriesService } from '../categories.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  category = "";
  title = "";
  links: string [] = [];

  pageSize = 0;
  noItems = 100;
  pageIndex = 0;
  len = 5;

  picsFrom = 0;
  picsUntil = 0;

  links$: Observable<string[]> = this._state.deletedCard$.pipe(
  startWith(void 0),
  switchMap(() => this._categoriesService.getLinksByCategory(this.category)),
  map(obs => JSON.parse(obs).links ?? []),
  map(links => {
      this.noItems = links.length; 
      return links.slice(this.picsFrom, this.picsUntil);
    })
);


  @Input() picDeleted = false;

  constructor(private router: Router,
    private _categoriesService: CategoriesService,
    private _state: StateService) { }

  ngOnInit(): void {
    this.category = this.router.url.split("/").pop() as string;
    this.title = `These are your ${this.category} dogs`;
    this.pageSize = this._state.noPics;
    this.picsUntil = this._state.noPics;
  }

  deletedPicture() {
    if (this.picDeleted) {
      this.picDeleted = false;
    }
  }

  handlePage(event: PageEvent) {
    this.picsFrom = event.pageIndex * event.pageSize;
    this.picsUntil = (event.pageIndex + 1) * event.pageSize;
    this._state.deletedCard$.next();
  }

}
