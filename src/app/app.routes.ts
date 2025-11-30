import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./components/home/home').then(m => m.HomeComponent) },
  { path: 'justificacion', loadComponent: () => import('./components/justificacion/justificacion').then(m => m.JustificacionComponent) },
  { path: 'instalacion', loadComponent: () => import('./components/instalacion/instalacion').then(m => m.InstalacionComponent) },
  { path: 'primeros-pasos', loadComponent: () => import('./components/primeros-pasos/primeros-pasos').then(m => m.PrimerosPasosComponent) },
  { path: 'utilizacion', loadComponent: () => import('./components/utilizacion/utilizacion').then(m => m.UtilizacionComponent) },
  { path: 'funcionamiento', loadComponent: () => import('./components/funcionamiento/funcionamiento').then(m => m.FuncionamientoComponent) },
  { path: 'conclusiones', loadComponent: () => import('./components/conclusiones/conclusiones').then(m => m.ConclusionesComponent) },
  { path: '**', redirectTo: '/home' }
];
