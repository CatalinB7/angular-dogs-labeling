import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page.component';
import { CategoryPageRoutingModule } from './category-page-routing.module';
import { DogsPagesModule } from '../dogs-pages/dogs-pages.module';



@NgModule({
  declarations: [
    CategoryPageComponent
  ],
  imports: [
    CommonModule,
    CategoryPageRoutingModule,
    DogsPagesModule,
  ]
})
export class CategoryPageModule { }
