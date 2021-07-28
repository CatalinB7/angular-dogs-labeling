import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [];
  title = "These are your categories!";
  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((obs: any) => {
      this.categories = obs.body.categories;
    });
  }

  removeCategory(category: string) {
    this.categories = this.categories.filter(el => el != category);
  }

  renameCategory([oldCategory, newCategory]: string[]) {

    this.categories = this.categories.map(el => {
      if (el != oldCategory)
        return el;
      return newCategory
    });
  }

  insertCategory(category: string) {
    this.categories.push(category);
  }

}
