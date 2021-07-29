import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CategoriesService } from '../categories.service';

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
  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((obs: any) => {
      this.categories = obs.body.categories;
      this.filterCategories();
    });  
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("my changes are ", changes, this.currentCategory);
    if(this.currentCategory) {
      this.filterCategories();
      this.showTrashcan = true;
    }
  }

  filterCategories() {
    this.categories = this.categories.filter(el => el != this.currentCategory);
  }

  sendPreference(idx: number) {
    this.categoryService.insertInCategory(this.link, this.categories[idx]).subscribe(obs => {
      //TODO DISPLAY ERROR IF NECESSARY
    })
  }

  removeLink(del: boolean) {
    if(del) {
      console.log("should delete", this.link);
    }
  }

}
