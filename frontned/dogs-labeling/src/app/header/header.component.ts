import { Component, OnInit, Input } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "Dogs are awesome!";
  passedBtnText = "ceva";
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationStart") {
        let route = (event as NavigationStart).url.substring(1);
        if (route == "login" || route == "register") {
          this.title = "Dogs are awesome!";
        } else {
          if (route == "random_dogs") {
            this.title = "Look at some random dogs";
          }
        }
      }
    });
  }

  getLoginBtnDisplay() {
    if(this.router.url.includes("login") || this.router.url.includes("register"))
      return "grid";
    return "none";
  }

}
