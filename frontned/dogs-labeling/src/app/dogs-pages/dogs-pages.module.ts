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
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { PicContainerComponent } from '../pic-container/pic-container.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    DogsPagesComponent,
    LoggedInHeaderComponent,
    ProfileMenuComponent,
    CardContainerComponent,
    SlidingContainerComponent,
    DisableBtnDirective,
    JustifyIfNoOverflowDirective,
    PicContainerComponent,
  ],
  imports: [
    CommonModule,
    DogsPagesRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [LoggedInHeaderComponent, CardContainerComponent, DogsPagesComponent, PicContainerComponent]
})
export class DogsPagesModule { }
