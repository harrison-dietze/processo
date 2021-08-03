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
  public form!: FormGroup;
  public listanova: Processo[] = processosInicial
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
    onSubmit(form: FormGroup, listanova: Processo[]) {
      this.service.adicionarProcesso(this.form.value, listanova)
      ;}}