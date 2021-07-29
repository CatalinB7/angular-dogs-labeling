import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit, OnChanges {
  @Input() link: string = "";
  @Input() currentCategory = "";

  showTrashcan = false;
  categories =[]; //["silly", "adorable", "fluffy", "silly", "adorable", "fluffy"];
  constructor(private _categoryService: CategoriesService,
    private _state: StateService) { }

  ngOnInit(): void {
    this._categoryService.getCategories().subscribe((obs: any) => {
      this.categories = obs.body.categories;
      this.filterCategories();
    });  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.currentCategory) {
      this.filterCategories();
      this.showTrashcan = true;
    }
  }


  filterCategories() {
    this.categories = this.categories.filter(el => el != this.currentCategory);
  }

  sendPreference(idx: number) {
    this._categoryService.insertInCategory(this.link, this.categories[idx]).subscribe(obs => {
      //TODO DISPLAY ERROR IF NECESSARY
    })
  }

  removeLink(del: boolean) {
    if(del) {
      this._categoryService.removeLink(this.currentCategory, this.link).subscribe(obs => {
        //update ui if succesful
        this._state.deletedCard$.next();
      }, err => {
        //SHOW ERROR
      });
    }
  }

}
