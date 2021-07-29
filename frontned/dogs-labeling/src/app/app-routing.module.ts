import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
// import { CategoryPageComponent } from './category-page/category-page.component';
// import { CategoryPageModule } from './category-page/category-page.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: 'view-category', loadChildren: () => import('./category-page/category-page.module').then(m => m.CategoryPageModule)},
  { path: 'dogs-pages', loadChildren: () => import('./dogs-pages/dogs-pages.module').then(m => m.DogsPagesModule)},
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
