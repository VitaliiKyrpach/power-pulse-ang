import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { DiaryPageComponent } from './components/diary-page/diary-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ExercisesPageComponent } from './components/exercises-page/exercises-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    loadComponent: ()=> import('./components/login-page/login-page.component').then(c=> c.LoginPageComponent)
    // component: LoginPageComponent,
  },
  {
    path: 'register',
    loadComponent: ()=> import('./components/register-page/register-page.component').then(c=> c.RegisterPageComponent)
    // component: RegisterPageComponent,
  },
  {
    path: 'diary',
    loadComponent: ()=> import('./components/diary-page/diary-page.component').then(c=> c.DiaryPageComponent)
    // component: DiaryPageComponent,
  },
  {
    path: 'profile',
    loadComponent: ()=> import('./components/profile-page/profile-page.component').then(c=> c.ProfilePageComponent)
    // component: ProfilePageComponent,
  },
  {
    path: 'products',
    loadComponent: ()=> import('./components/products-page/products-page.component').then(c=>c.ProductsPageComponent)
    // component: ProductsPageComponent
  },
  {
    path: 'exercises',
    loadComponent: ()=> import('./components/exercises-page/exercises-page.component').then(c=> c.ExercisesPageComponent)
    // component: ExercisesPageComponent
  },
  {
    path: '**',
    loadComponent: ()=>import('./components/not-found/not-found.component').then(c=>c.NotFoundComponent)
    // component: NotFoundComponent,
  },
];
