import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { ComponentComponent } from './components/component/component.component';
import { MembresiasComponent } from './membresias/membresias.component';
import { EmpresasComponent } from './empresas/empresas.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'',component:ComponentComponent,children:[
    {path:'inicio', component: HomeComponent},
    {path:'usuarios', component: UsuariosComponent},
    {path:'membresias', component:MembresiasComponent },
    {path:'empresas', component: EmpresasComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
