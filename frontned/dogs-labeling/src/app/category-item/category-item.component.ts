import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  @Input() category: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
