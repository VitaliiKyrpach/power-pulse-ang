import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { DiaryPageComponent } from './components/diary-page/diary-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'diary',
    component: DiaryPageComponent,
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
