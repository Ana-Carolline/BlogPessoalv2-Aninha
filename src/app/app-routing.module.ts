import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';

const routes: Routes = [

  {path:'', redirectTo: 'entrar', pathMatch: 'full'},

  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},

  {path: 'inicio', component: InicioComponent},
  {path: 'tema', component: TemaComponent},

  {path: 'tema-edit/:idTema', component: TemaEditComponent},
  {path: 'tema-delete/:idTema', component: TemaDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
