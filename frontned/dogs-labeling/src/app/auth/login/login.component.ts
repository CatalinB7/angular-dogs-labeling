import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd  } from '@angular/router';
import { DataFetchingService } from 'src/app/data-fetching.service';
import { ErrorModalComponent } from 'src/app/error-modal/error-modal.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitBtn = "Login";
  navBtn = "";
  route = "";
  credentials = {
    username: "",
    pass: ""
  }

  constructor(private router: Router, public dialog: MatDialog,
    private fetchingService: DataFetchingService) {
    this.router.events.subscribe(event => {
      if(event.constructor.name === "NavigationStart") {
        this.route = (event as NavigationStart).url.substring(1);
        this.submitBtn = this.route.charAt(0).toUpperCase() + this.route.slice(1);
        this.submitBtn = this.submitBtn == ""? "Login" : this.submitBtn;
        this.navBtn = this.route == "/login"? "Register":"Login";
      }
    });
  }

  ngOnInit(): void {

  }


  sendCredentials() {
    //TODO
    if(this.credentials.pass.length < 7) {
      this.dialog.open(ErrorModalComponent, {data: {err: "Password is too short! Length must be greater than 7"}});
    }
  }


}
