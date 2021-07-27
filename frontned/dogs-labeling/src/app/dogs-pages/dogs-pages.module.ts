import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogsPagesRoutingModule } from './dogs-pages-routing.module';
import { DogsPagesComponent } from './dogs-pages.component';
import { LoggedInHeaderComponent } from '../logged-in-header/logged-in-header.component';
import { ProfileMenuComponent } from '../profile-menu/profile-menu.component';
import { CardContainerComponent } from '../card-container/card-container.component';
import { SlidingContainerComponent } from '../sliding-container/sliding-container.component';
import { DisableBtnDirective } from '../disable-btn.directive';
import { JustifyIfNoOverflowDirective } from '../justify-if-no-overflow.directive';


@NgModule({
  declarations: [
    DogsPagesComponent,
    LoggedInHeaderComponent,
    ProfileMenuComponent,
    CardContainerComponent,
    SlidingContainerComponent,
    DisableBtnDirective,
    JustifyIfNoOverflowDirective,
  ],
  imports: [
    CommonModule,
    DogsPagesRoutingModule
  ]
})
export class DogsPagesModule { }
