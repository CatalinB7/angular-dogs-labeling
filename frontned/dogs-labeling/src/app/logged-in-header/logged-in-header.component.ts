import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-logged-in-header',
  templateUrl: './logged-in-header.component.html',
  styleUrls: ['./logged-in-header.component.css']
})
export class LoggedInHeaderComponent implements OnInit {
  title = "Random dogs!"
  name = "";
  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.name = this.state.Name;
  }

}
