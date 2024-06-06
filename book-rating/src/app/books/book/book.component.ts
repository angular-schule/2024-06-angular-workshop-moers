import { Component, Input, computed, input, model } from '@angular/core';
import { Book } from '../shared/book';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgClass], // wahrscheinlich neben routerLink die einzige Direktive die ihr benötigt 😸
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  // alter Stil mit Dekorator
  // @Input({ required: true }) book?: Book;

  // tollesBuch() {
  //   return this.book?.title === 'Angular'
  // }

  // neuer Stil mit Signal --> DEVELOPER PREVIEW
  book = input.required<Book>();

  tollesBuch = computed(() => this.book().title === 'Angular');
}
