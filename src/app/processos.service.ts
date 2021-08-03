import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Processo } from './processo.model';

import { TelaListaComponent } from './tela-lista/tela-lista.component';
import { processosInicial } from './processo.mock';

@Injectable({
  providedIn: 'root'
})
export class ProcessosService {
  public listarProcessos(): Observable<Processo[]> {
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(processosInicial);
        subscriber.complete();
      },);
    });
  }
  public adicionarProcesso(processo: Processo, listanova: Processo[])
  {
    listanova.push(processo)
    return listanova
  }

  constructor() { }
}
