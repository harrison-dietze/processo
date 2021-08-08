import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaListaComponent } from './tela-lista/tela-lista.component';
import { ProcessoCardComponent } from './processo-card/processo-card.component';
import { CadastroPageComponent } from './cadastro-page/cadastro-page.component';
import { ProcessoFormComponent } from './processo-form/processo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdicaoPageComponent } from './edicao-page/edicao-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaListaComponent,
    ProcessoCardComponent,
    CadastroPageComponent,
    ProcessoFormComponent,
    EdicaoPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
