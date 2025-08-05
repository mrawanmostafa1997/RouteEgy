import { Routes } from '@angular/router';
import { About } from '../components/about/about';
import { Portfolio } from '../components/portfolio/portfolio';
import { Contact } from '../components/contact/contact';
import { NotFound } from '../components/not-found/not-found';

export const routes: Routes = [
  { path: 'about', component: About },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },
  {
    path: '',
    redirectTo: '/portfolio',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFound,
  },
];
