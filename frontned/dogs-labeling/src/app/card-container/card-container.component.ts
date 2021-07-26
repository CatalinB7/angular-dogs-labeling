import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  @Input() link: string = "";
  categories = ["silly", "adorable", "fluffy", "silly", "adorable", "fluffy"];
  constructor() { }

  ngOnInit(): void {
  }

}
