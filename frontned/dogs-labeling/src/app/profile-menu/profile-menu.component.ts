import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit {
  name: string = "";
  constructor(private state: StateService,
    private router: Router) { }

  ngOnInit(): void {
    this.name = this.state.Name;
  }

  logout() {
    this.state.logout();
    this.router.navigateByUrl(`/login`);
  }

}
