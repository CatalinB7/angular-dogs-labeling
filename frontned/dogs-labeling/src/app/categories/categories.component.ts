import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [];

  title = "These are your categories!";
  constructor(private _categoryService: CategoriesService,
    private _router: Router) { }

  ngOnInit(): void {
    this._categoryService.getCategories().subscribe((obs: any) => {
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

  goToRandomDogs() {
    this._router.navigateByUrl(`/dogs-pages`);
  }

}
