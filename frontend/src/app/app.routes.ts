import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { PartnersDetailsComponent } from './components/partners-details/partners-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, 
  { path: 'details', component: PartnersDetailsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];
