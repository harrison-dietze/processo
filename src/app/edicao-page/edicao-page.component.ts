import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Processo } from '../processo.model';
import { ProcessosService } from '../processos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { processosInicial } from '../processo.mock';

@Component({
  selector: 'edicao-page',
  templateUrl: './edicao-page.component.html',
  styleUrls: ['./edicao-page.component.css']
})
export class EdicaoPageComponent implements OnInit { 
  edi!: number;
  public novo!: Processo;
  public eform!: FormGroup;
  verificado!: Processo;
  x: number = 0;
  esseDescricao!: string;
  esseCodigo!: string;
  constructor(private fb: FormBuilder, private service: ProcessosService, private route: ActivatedRoute,  private router: Router) { }
  ngOnInit(): void {
    const codigo = String(this.route.snapshot.paramMap.get('codigo'));
    this.esseCodigo = codigo
    this.edi = processosInicial.findIndex((obj => obj.codigo == codigo));
    
    this.service.buscarProcesso(codigo).subscribe((processo: Processo) => {
      this.eform = this.fb.group({
        codigo: [processo.codigo, [Validators.required]],
        descricao: [processo.descricao
          ,
          [Validators.required]],
        isAtivo: [processo.isAtivo, [Validators.required]],
      });
    });
    this.esseDescricao = processosInicial[this.edi].descricao
}

  editar(processo: Processo) {
    if (this.eform.value.descricao.length > 40){
      alert("O limite de caracteres para o descrição é de 40 caracteres.")
      this.eform.controls['descricao'].reset()
    }
    else if (this.eform.value.codigo.length > 4){
      alert("O limite de caracteres para o código é de 4 caracteres.")
      this.eform.controls['codigo'].reset()
    }
    else{
      this.verificado = this.eform.value
      for (processosInicial[this.x]; this.x<processosInicial.length; this.x++) {
        if (this.esseCodigo == this.verificado.codigo  && this.esseDescricao == this.verificado.descricao ) {
          alert('Processo editado com sucesso.')
          processosInicial[this.edi] = this.verificado
          this.eform.reset();
          break
        }
        else if(processosInicial[this.x] != processosInicial[this.edi]){
            if(processosInicial[this.x].codigo == this.verificado.codigo || processosInicial[this.x].descricao == this.verificado.descricao){
              alert("Já existe um processo com esse código ou descrição.");
              this.eform.controls['codigo'].reset()
              this.eform.controls['descricao'].reset()
              break
            }
        }
        


        //else if (processosInicial[this.edi].codigo != this.verificado.codigo || processosInicial[this.edi].descricao != this.verificado.descricao) {
          //if (processosInicial[this.x] != processosInicial[this.edi]) {
            //if (processosInicial[this.x].codigo == this.verificado.codigo  || processosInicial[this.x].descricao == this.verificado.descricao ) {
              //this.eform.controls['descricao'].reset()
              //this.eform.controls['codigo'].reset()
              //alert('Já existe um processo com o mesmo código ou descrição no sistema.')
              //break
            //}
        //}
      //}

        //else if (processosInicial[this.x].codigo == this.verificado.codigo || processosInicial[this.x].descricao == this.verificado.descricao){
          //this.eform.controls['descricao'].reset()
          //this.eform.controls['codigo'].reset()
          //alert('Já existe um processo com o mesmo código ou descrição no sistema.')
          //break
        //}
        else {
          processosInicial[this.edi] = this.verificado
          alert("Processo editado com sucesso.")
          this.eform.reset();
          break
        }
      } 
    }
  }
}
