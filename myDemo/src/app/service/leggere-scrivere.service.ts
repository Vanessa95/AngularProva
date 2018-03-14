import { Injectable } from '@angular/core';

@Injectable()
export class LeggereScrivereService {
eta: number;
nome: string;
conferma: boolean;

  constructor() {
    this.eta = 22;
    this.nome = 'Vanessa';
    this.conferma = true;
  }
  getEta() {
    return this.eta;
  }
  getNome() {
     return this.nome;
  }
  getConferma() {
    return this.conferma;
  }
  setEta(eta) {
    this.eta = eta;
  }
  setNome(nome) {
    this.nome = nome;
  }
  setConferma(conferma) {
    this.conferma = conferma;
  }

}
