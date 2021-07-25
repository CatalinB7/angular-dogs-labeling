import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-register-switch',
  templateUrl: './register-switch.component.html',
  styleUrls: ['./register-switch.component.css']
})
export class RegisterSwitchComponent implements OnInit {
  btnText = "";
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if(event.constructor.name === "NavigationStart") {
        let route = (event as NavigationStart).url.substring(1);
        console.log("header event =", (route));
        this.btnText = route == "login" || route == ""? "Register":"Login";
        console.log("passed = ", this.btnText);
      }
    });
   }

  ngOnInit(): void {
  }

  switchClicked() {
    console.log("CLICKED REG", this.btnText);
    let destination = this.btnText === "Login"? "login" : "register";
    this.router.navigateByUrl(`/${destination}`);
  }

}
