import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Processo } from '../processo.model';

@Component({
  selector: 'processo-card',
  templateUrl: './processo-card.component.html',
  styleUrls: ['./processo-card.component.css']
})
export class ProcessoCardComponent implements OnInit {
  @Input()
  processo!: Processo;
  constructor() { }

  ngOnInit(): void {
  }
  @Output() editar = new EventEmitter<string>();
  public onClickEditar() {
    this.editar.emit(this.processo.codigo);
  }

}
