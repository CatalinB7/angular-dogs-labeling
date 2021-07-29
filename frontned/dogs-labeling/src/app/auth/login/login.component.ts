import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd  } from '@angular/router';
import { DataFetchingService } from 'src/app/data-fetching.service';
import { ErrorModalComponent } from 'src/app/error-modal/error-modal.component';
import { StateService } from 'src/app/state.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitBtn = "Login";
  subtitle = "Login";
  route = "";
  credentials = {
    username: "",
    pass: ""
  }

  constructor(private router: Router, public dialog: MatDialog,
    private fetchingService: DataFetchingService,
    private state: StateService) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event.constructor.name === "NavigationStart") {
        this.route = (event as NavigationStart).url.substring(1);
      }
    });
    this.subtitle = this.router.url.substring(1).toUpperCase();
    this.submitBtn = this.subtitle.charAt(0) + this.subtitle.slice(1).toLowerCase();
  }

  ngOnDestroy() {
  }

  sendCredentials() {
    let requiredPassLen = 2;
    if(this.credentials.pass.length < requiredPassLen) {
      this.dialogModal(`Password is too short! Length must be greater than ${requiredPassLen}`);
      return
    } 

      if(this.router.url === "/register") {
        this.fetchingService.register(this.credentials.username, this.credentials.pass)
        .subscribe(this.redirectLogin, this.handleErr);
      }
      else this.fetchingService.login(this.credentials.username, this.credentials.pass)
        .subscribe(this.redirectRandomDogs, this.handleErr);
      
  }

  redirectLogin = () => {
    this.router.navigateByUrl(`/login`);
  }

  redirectRandomDogs = (resp: any) => {
    this.state.Name = this.credentials.username;
    this.state.SessionId = resp.id;
    this.router.navigateByUrl(`/dogs-pages`);
  }


  handleErr = (err: any) => {
    let msg = "Something bad happend!";
    switch(err.statusText) {
      case "Conflict":
        msg = "Username already exists!";
        break;
      case "Unauthorized":
        msg = "Wrong credentials!";
        break;
    }
     this.dialogModal(msg);
  }

  dialogModal(err: string) {
    this.dialog.open(ErrorModalComponent, {data: {err}} );
  }

}

