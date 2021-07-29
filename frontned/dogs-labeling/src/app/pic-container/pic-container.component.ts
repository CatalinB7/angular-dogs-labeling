import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pic-container',
  templateUrl: './pic-container.component.html',
  styleUrls: ['./pic-container.component.css']
})
export class PicContainerComponent implements OnInit {

  @Input() links: string[] = [];
  @Input() currentCategory = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCategories() {
    this.router.navigateByUrl(`/categories`);
  }

  goToRandomDogs() {
    if (!this.router.url.includes("dogs-pages"))
      this.router.navigateByUrl(`/dogs-pages`);
    else {
      //refresh the page or tell the parent the child needs new data?
      window.location.reload();
    }
  }

}
