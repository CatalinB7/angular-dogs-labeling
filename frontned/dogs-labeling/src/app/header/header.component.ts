import { Component, OnInit, Input } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title = "Dogs are awesome!";
  passedBtnText = "ceva";
  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

}
