import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OportunidadesComponent }      from './oportunidades/oportunidades.component';
import { OportunidadDetailComponent }  from './oportunidad-detail/oportunidad-detail.component';
import { AplicacionOportunidadComponent } from './aplicacion-oportunidad/aplicacion-oportunidad.component';


const routes: Routes = [
  { path: 'oportunidades', component: OportunidadesComponent },
  { path: 'detail/:id', component: OportunidadDetailComponent },  
  { path: 'apply/:id', component:  AplicacionOportunidadComponent}, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ] 
})
export class AppRoutingModule { }
