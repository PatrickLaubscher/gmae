import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PartnersDetailsComponent } from './components/partners-details/partners-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: PartnersDetailsComponent },
];

