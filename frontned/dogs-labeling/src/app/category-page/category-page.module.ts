import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page.component';
import { CategoryPageRoutingModule } from './category-page-routing.module';
import { DogsPagesModule } from '../dogs-pages/dogs-pages.module';
import { PicContainerComponent } from '../pic-container/pic-container.component';



@NgModule({
  declarations: [
    CategoryPageComponent
  ],
  imports: [
    CommonModule,
    CategoryPageRoutingModule,
    DogsPagesModule,
    // PicContainerComponent
  ]
})
export class CategoryPageModule { }
