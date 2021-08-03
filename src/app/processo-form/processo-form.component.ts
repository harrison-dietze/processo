import { Component, EventEmitter, OnInit } from '@angular/core';
import { Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { processosInicial } from '../processo.mock';
import { Processo } from '../processo.model';

@Component({
  selector: 'processo-form',
  templateUrl: './processo-form.component.html',
  styleUrls: ['./processo-form.component.css']
})
export class ProcessoFormComponent implements OnInit {
  @Input()form!: FormGroup;

  @Output() submit = new EventEmitter<Processo>();

  public submitForm() {
    if (!this.form.valid) {
      alert('Formulário inválido, preencha corretamente.');
      return;
    }

    this.submit.emit(this.form.value);
    processosInicial.push(this.form.value)
    this.form.reset();
    alert('Processo cadastrado com sucesso.');
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
