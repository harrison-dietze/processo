import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Processo } from '../processo.model';
import { ProcessosService } from '../processos.service';
import { processosInicial } from '../processo.mock';

@Component({
  selector: 'app-cadastro-page',
  templateUrl: './cadastro-page.component.html',
  styleUrls: ['./cadastro-page.component.css']
})
export class CadastroPageComponent implements OnInit {
  x =  0;
  igual = false;
  processos: Processo[] = [];
  verificado!: Processo;
  public novo = true;
  public form!: FormGroup;
  constructor(private fb: FormBuilder, private service: ProcessosService,  private router: Router) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      codigo: ['', [Validators.required]],
      descricao: [
        '',
        [Validators.required]
      ],
      isAtivo: [true, [Validators.required]],
    });
    }

    cadastrar(processo: Processo) {
      this.verificado = this.form.value
        for (processosInicial[this.x]; this.x<processosInicial.length; this.x++) {
            if (processosInicial[this.x].codigo == this.verificado.codigo || processosInicial[this.x].descricao == this.verificado.descricao){
              alert("Já existe um processo com esse código ou descrição.")
              this.igual = true;
              break
            }
          else{
            this.igual = false;
          }}
          if (this.igual == false){
            alert('Processo cadastrado com sucesso.')
              processosInicial.push(this.form.value)
              this.form.reset();
          }
        }
      }
        