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
  public form!: FormGroup;
  verificado!: Processo;
  x: number = 0;
  esseDescricao!: string;
  esseCodigo!: string;
  constructor(private fb: FormBuilder, private service: ProcessosService, private route: ActivatedRoute,  private router: Router) { }
  ngOnInit(): void {
    const codigo = String(this.route.snapshot.paramMap.get('codigo'));
    this.esseCodigo = codigo
    this.esseDescricao = this.form.value.descricao
    this.edi = processosInicial.findIndex((obj => obj.codigo == codigo));
    
    this.service.buscarProcesso(codigo).subscribe((processo: Processo) => {
      this.form = this.fb.group({
        descricao: [processo.descricao, [Validators.required]],
        codigo: [processo.codigo, [Validators.required]],
        isAtivo: [processo.isAtivo, [Validators.required]]
  })
});
}

  editar(processo: Processo) {
    this.verificado = this.form.value
    for (processosInicial[this.x]; this.x<processosInicial.length; this.x++) {
      if (this.esseCodigo == this.verificado.codigo  || this.esseDescricao == this.verificado.descricao) {
        alert('Processo cadastrado com sucesso.')
        processosInicial[this.edi] = this.verificado
        this.form.reset();
        break
      }
      else if (processosInicial[this.x].codigo == this.verificado.codigo || processosInicial[this.x].descricao == this.verificado.descricao){
        this.form.controls['descricao'].reset()
        this.form.controls['codigo'].reset()
        alert('Já existe um processo com o mesmo código ou descrição no sistema.')
        break
      }
      else {
        processosInicial[this.edi] = this.verificado
        alert("Processo editado com sucesso.")
        this.form.reset();
      } 
  }}}
