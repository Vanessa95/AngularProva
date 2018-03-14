import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.id = 1;
    this.titolo = 'ciao';
    this.conferma = true;
    this.array = ['uno', 'due', 'tre', 'quattro', 'cinque'];
  }
  modifica() {
    this.conferma = !this.conferma;
  }

  ngOnInit() {
  }

}
