import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsPagesComponent } from './dogs-pages.component';

const routes: Routes = [{ path: '', component: DogsPagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsPagesRoutingModule { }
