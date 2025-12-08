import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'proyectos', loadComponent: () => import('./proyectos/proyectos/proyectos.component').then(m => m.ProyectosComponent) },
  { path: 'contacto', loadComponent: () => import('./contacto/contacto/contacto.component').then(m => m.ContactoComponent) },
  { path: '**', redirectTo: '' } // fallback a home
];
