import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tytul: string = '';
  opis: string = '';
  Tablica()
  {
const filmy = ["Gwiezdne wojny część I","Gwiezdne wojny część II","Gwiezdne wojny część III","Gwiezdne wojny część IV","Gwiezdne wojny część V","Gwiezdne wojny część VI","Gwiezdne wojny część VII","Gwiezdne wojny część VIII","Gwiezdne wojny część IX"];
filmy.push(this.tytul);
  }
};