import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-insert-category',
  templateUrl: './insert-category.component.html',
  styleUrls: ['./insert-category.component.css']
})
export class InsertCategoryComponent implements OnInit {
  visible = false;
  icon = "add";
  category = "";
  constructor(private categorySerice: CategoriesService) { }

  ngOnInit(): void {
  }

  clickedIcon() {
    if (this.icon == "add") {
      this.icon = "clear";
    }
    this.visible = !this.visible;
  }

  insertCategory() {
    
    this.categorySerice.insertCategory(this.category).subscribe(obs => {
      console.log("obs = ", obs);
    })
  }

  setValue(ev: any) {
    this.category = ev.target.value;
  }

}
