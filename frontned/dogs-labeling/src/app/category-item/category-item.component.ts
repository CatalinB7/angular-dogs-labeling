import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private categorySerice: CategoriesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  deleteCategory() {
    this.categorySerice.deleteCategory(this.category).subscribe(obs => {
      if(obs == "OK") {
        this.deleted.emit(this.category);
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
      //HANDLE ERROR
    });
  }

  goToCategory() {
    this.router.navigateByUrl(`/view-category/${this.category}`);
  }

}
