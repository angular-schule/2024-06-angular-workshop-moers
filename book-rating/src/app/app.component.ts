import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // alter Stil
  title = 'Book Rating';

  // neuer Stil mit Signals
  title2 = signal('Book Rating 2');

  constructor() {
    window.setTimeout(() => this.title = 'blubb', 1000);


    window.setTimeout(() => this.title2.set('blubb'), 1000);
  }
}
