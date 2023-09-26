import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tytul: string = '';
  opis: string = '';
  x: number = 0;
  y: number = 0;
  Tablica() {
    const filmy = [
      'Gwiezdne wojny część I',
      'Gwiezdne wojny część II',
      'Gwiezdne wojny część III',
      'Gwiezdne wojny część IV',
      'Gwiezdne wojny część V',
      'Gwiezdne wojny część VI',
      'Gwiezdne wojny część VII',
      'Gwiezdne wojny część VIII',
      'Gwiezdne wojny część IX',
    ];
    const Opis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    filmy.push(this.tytul);
    Opis.push(this.opis);
    const Usunfilm = filmy.splice(this.x, this.y);
    const Usunopis = filmy.splice(this.x, this.y);
    document.write(
      '<table>',
      '<tr>',
      '<th>tytuł</th>',
      '<th>opis</th>',
      '</tr>',
      '<tr>'
    );
    for (let film of this.tytul) {
      document.write('<td>');
      document.write(film);
      document.write('</td>');
    }
    for (let op of this.opis) {
      document.write('<td>');
      document.write(op);
      document.write('</td>');
    }
    document.write('</tr>', '</table>');
  }
}
