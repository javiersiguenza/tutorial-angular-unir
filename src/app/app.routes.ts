import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { InstalacionComponent } from './components/instalacion/instalacion';
import { FuncionamientoComponent } from './components/funcionamiento/funcionamiento';
import { PrimerosPasosComponent } from './components/primeros-pasos/primeros-pasos';
import { UtilizacionComponent } from './components/utilizacion/utilizacion';
import { JustificacionComponent } from './components/justificacion/justificacion';
import { ConclusionesComponent } from './components/conclusiones/conclusiones';
import { DemoComponent } from './components/demo/demo';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'instalacion', component: InstalacionComponent },
  { path: 'funcionamiento', component: FuncionamientoComponent },
  { path: 'primeros-pasos', component: PrimerosPasosComponent },
  { path: 'utilizacion', component: UtilizacionComponent },
  { path: 'justificacion', component: JustificacionComponent },
  { path: 'conclusiones', component: ConclusionesComponent },
  { path: 'demo', component: DemoComponent },
  { path: '**', redirectTo: '' }
];