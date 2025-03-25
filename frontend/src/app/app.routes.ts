import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection par défaut
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent } // Page d'accueil
];
