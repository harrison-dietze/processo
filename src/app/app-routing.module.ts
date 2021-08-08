import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPageComponent } from './cadastro-page/cadastro-page.component';
import { EdicaoPageComponent } from './edicao-page/edicao-page.component';
import { TelaListaComponent } from './tela-lista/tela-lista.component';

const routes: Routes = [
  { path: 'lista', component: TelaListaComponent },
  { path: "", redirectTo: "lista", pathMatch: "full" },
  { path: 'cadastro', component: CadastroPageComponent },
  { path: 'edicao/:codigo', component: EdicaoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
