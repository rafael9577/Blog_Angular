import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
   {
      path: '',
      loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
   },
   {
      path: 'notice/:id',
      loadComponent: () => import('./pages/content/content.component').then(m => m.ContentComponent)
   },
   {
      path: '**', redirectTo: '' , component: HomeComponent, pathMatch:  'full'
   }
];
export class AppRoutingModule { }
