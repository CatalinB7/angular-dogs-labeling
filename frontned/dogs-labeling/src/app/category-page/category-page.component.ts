import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  category = "";
  title = "";
  links: string [] = [];
  constructor(private router: Router,
    private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.category = this.router.url.split("/").pop() as string;
    this.title = `These are your ${this.category} dogs`;
    this.categoriesService.getLinksByCategory(this.category).subscribe( (obs: any) => {
       console.log("obs = ", obs, {...obs});
      this.links = JSON.parse(obs).links;
      console.log("links = ", this.links);
    }, err => {
      //todo throw error
    })
  }

}
