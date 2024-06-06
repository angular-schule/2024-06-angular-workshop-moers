import { Component, Input, input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  // alter Stil mit Dekorator
  // @Input({ required: true }) book?: Book;


  // neuer Stil mit Signal --> DEVELOPER PREVIEW
  book = input.required<Book>();
}
