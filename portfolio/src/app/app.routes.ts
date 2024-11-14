import { Routes } from '@angular/router';
import {WorksComponent} from './works/works.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {SideProjectsComponent} from './side-projects/side-projects.component';
import {ContactMeComponent} from './contact-me/contact-me.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: 'works', component: WorksComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'side-projects', component: SideProjectsComponent },
  { path: 'contact-me', component: ContactMeComponent },
  // Optionally add a wildcard route for a 404 page
  // { path: '**', component: PageNotFoundComponent },
];
