import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page.component';
import { CategoryPageRoutingModule } from './category-page-routing.module';
import { DogsPagesModule } from '../dogs-pages/dogs-pages.module';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CategoryPageComponent
  ],
  imports: [
    CommonModule,
    CategoryPageRoutingModule,
    DogsPagesModule,
    MatPaginatorModule,
    MatTableModule 
  ]
})
export class CategoryPageModule { }
