import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-sliding-container',
  templateUrl: './sliding-container.component.html',
  styleUrls: ['./sliding-container.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SlidingContainerComponent implements OnInit {
  @Input() categories: string[] = [];
  @Output() chosenIndex = new EventEmitter<number>();
  constructor(categoryService: CategoriesService) { }

  ngOnInit(): void {
  }

  sendPreference(idx: number) {
    //console.log("category = %s, idx = %d", this.categories[0], idx);
    this.chosenIndex.emit(idx);
  }

}
