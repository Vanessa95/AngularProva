import { Component, OnInit } from '@angular/core';
import { LeggereScrivereService } from '../service/leggere-scrivere.service';
import { Persona } from '../model/classe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id: number;
  titolo: string;
  conferma: boolean;
  array = [];
  dePersona: Persona;

  constructor(private ls: LeggereScrivereService) {
    this.id = 1;
    this.titolo = 'ciao';
    this.conferma = true;
    this.array = ['uno', 'due', 'tre', 'quattro', 'cinque'];
  }
  modifica() {
    this.conferma = !this.conferma;
  }

  ngOnInit() {
    this.id = this.ls.getEta();
    this.titolo = this.ls.getNome();
    this.conferma = this.ls.getConferma();
    this.ls.getPersona().subscribe(persona => this.dePersona = persona);
  }
}
