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

  constructor() {
    this.id = 1;
    this.titolo = 'ciao';
    this.conferma = true;
  }
  modifica() {
    this.conferma = false;
  }

  ngOnInit() {
  }

}
