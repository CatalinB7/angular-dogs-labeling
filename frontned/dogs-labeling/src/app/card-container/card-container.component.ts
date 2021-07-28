import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  @Input() link: string = "";
  categories =[]; //["silly", "adorable", "fluffy", "silly", "adorable", "fluffy"];
  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((obs: any) => {
      this.categories = obs.body.categories;
    });  
  }

  sendPreference(idx: number) {
    this.categoryService.insertInCategory(this.link, this.categories[idx]).subscribe(obs =>{
      console.log("obs = ", obs); // nothing to do here
    })
  }

}
