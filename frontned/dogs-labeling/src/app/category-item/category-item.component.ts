import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  @Input() category: string = "";
  @Output() deleted = new EventEmitter<string>();
  @Output() renamed = new EventEmitter<[string, string]>();
  newCat = "";
  constructor(private categorySerice: CategoriesService) { }

  ngOnInit(): void {
  }

  deleteCategory() {
    console.log("should delete", this.category);
    this.categorySerice.deleteCategory(this.category).subscribe(obs => {
      if(obs == "OK") {
        this.deleted.emit(this.category);
        //update UI
      } else {
        //throw error
      }
    }, err => {
      
    });
  }

  editCategory(newCategory: string) {
    this.categorySerice.editCategory(this.category, newCategory).subscribe(obs => {
      if(obs == "OK") {
        //update UI
        this.renamed.emit([this.category, this.newCat]);
        this.category = this.newCat;
        this.newCat = "";
      } else {
        //throw error
      }
  }, err => {
      
  });

  }

}