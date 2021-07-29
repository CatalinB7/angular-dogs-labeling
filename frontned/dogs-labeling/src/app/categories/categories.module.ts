import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { LoggedInHeaderComponent } from '../logged-in-header/logged-in-header.component';
import { DogsPagesModule } from '../dogs-pages/dogs-pages.module';
import { CategoryItemComponent } from '../category-item/category-item.component';
// import { MatAccordion } from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { InsertCategoryComponent } from '../insert-category/insert-category.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryItemComponent,
    InsertCategoryComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    DogsPagesModule,
    MatExpansionModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
  ]
})
export class CategoriesModule { }
