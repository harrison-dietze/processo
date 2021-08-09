import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Processo } from '../processo.model';
import { ProcessosService } from '../processos.service';
import { CadastroPageComponent } from "../cadastro-page/cadastro-page.component"

@Component({
  selector: 'tela-lista',
  templateUrl: './tela-lista.component.html',
  styleUrls: ['./tela-lista.component.css']
})
export class TelaListaComponent implements OnInit {
  
  public lista: Processo[] = []
  statusFiltro = null
  descricaoFiltro: string = ""
  codigoFiltro: string = ""
  constructor(private service: ProcessosService, private router: Router) { }
  ngOnInit(): void {
    this.service
    .listarProcessos()
    .subscribe(listaProcessos => (this.lista = listaProcessos));
  }

  public get listaFiltro1() {
    return this.lista.filter(processo => {
      if(this.statusFiltro == null){
        return true;
      }
      else if(processo.isAtivo == this.statusFiltro){
        return true;
      }
      else{
        return false;
      }
  })
  }

  public get listaFiltro2() {
    return this.listaFiltro1.filter(processo => {
      if(this.descricaoFiltro == ""){
        return true;
      }
      else if(processo.descricao.includes(this.descricaoFiltro)){
        return true;
      }
      else{
        return false;
      }
  })
  }

  public get listaFiltro3() {
    return this.listaFiltro2.filter(processo => {
      if(this.codigoFiltro == ""){
        return true;
      }
      else if(processo.codigo.includes(this.codigoFiltro)){
        return true;
      }
      else{
        return false;
      }
  })
  }
  public cadastrar(){
    this.router.navigateByUrl('/cadastro')
  }

  public editar(codigo: string) {
    this.router.navigateByUrl('/edicao/' + codigo);
  }
  

}
