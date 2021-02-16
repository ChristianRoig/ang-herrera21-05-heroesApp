import { NgModule } from '@angular/core';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'listado',
        component: ListadoComponent        
      },
      {
        path:'agregar',
        component: AgregarComponent        
      },
      {
        path:'editar/:id',
        component: AgregarComponent        
      },
      {
        path:'buscar',
        component: BuscarComponent        
      },
      {
        path:':id',
        component: HeroeComponent        
      },
      {
        path:'**',
        redirectTo: 'listado'
      }
    ]
  }
  
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
