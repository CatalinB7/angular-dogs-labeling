import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sliding-container',
  templateUrl: './sliding-container.component.html',
  styleUrls: ['./sliding-container.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SlidingContainerComponent implements OnInit {
  @Input() categories: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  sendPreference(idx: number) {
    console.log("category = %s, idx = %d", this.categories[0], idx);
  }

}
