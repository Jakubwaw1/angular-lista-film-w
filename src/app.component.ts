import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tytul: string = '';
  opis: string = '';
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
    document.write(
      '<table>',
      '<tr>',
      '<th>tytuł</th>',
      '<th>opis</th>',
      '</tr>');
    for (let film of this.tytul; let op of this.opis) {
      document.write(
        '<tr>',
        '<td>',
        document.write(film),
        '</td>',
        '<td>',
        document.write(op),
        '</td>',
        '</tr>',
      );
    }
    document.write('</table>');
  }
}
