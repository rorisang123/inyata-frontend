import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent },
];
