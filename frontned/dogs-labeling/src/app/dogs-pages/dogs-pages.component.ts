import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-dogs-pages',
  templateUrl: './dogs-pages.component.html',
  styleUrls: ['./dogs-pages.component.css']
})
export class DogsPagesComponent implements OnInit {
  name = "";
  links = [
    "https://images.dog.ceo/breeds/spaniel-japanese/n02085782_1058.jpg",
    "https://images.dog.ceo/breeds/appenzeller/n02107908_7205.jpg",
    "https://images.dog.ceo/breeds/basenji/n02110806_1236.jpg",
    "https://images.dog.ceo/breeds/terrier-westhighland/n02098286_6216.jpg",
    "https://images.dog.ceo/breeds/eskimo/n02109961_7861.jpg",
    "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1986.jpg"

];
  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.name = this.state.Name;
    console.log("name = ", this.name);
  }

}
