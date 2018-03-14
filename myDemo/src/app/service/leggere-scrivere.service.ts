import { Injectable } from '@angular/core';
import { Persona } from '../model/classe';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LeggereScrivereService {
eta: number;
nome: string;
conferma: boolean;
persona: Persona = new Persona();

  constructor() {
    this.eta = 22;
    this.nome = 'Vanessa';
    this.conferma = true;
    this.persona.eta = 23;
    this.persona.cognome = 'Militello';
    this.persona.nome = 'Vanessa';
    this.persona.giudizio = false;
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
  getPersona(): Observable <Persona> {
    return of(this.persona);
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
