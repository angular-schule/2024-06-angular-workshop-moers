import { Component, EventEmitter, Input, Output, computed, input, model, output } from '@angular/core';
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

  //#region
  // alter Stil mit Dekorator
  // @Input({ required: true }) book?: Book;

  // alter Stil mit Dekorator
  // @Output() rateUp = new EventEmitter<Book>();
  // @Output() rateDown = new EventEmitter<Book>();


  // tollesBuch() {
  //   return this.book?.title === 'Angular'
  // }

  // doRateUp() {
  //   this.rateUp.emit(this.book);
  // }

  // doRateRown() {
  //   this.rateDown.emit(this.book);
  // }
  //#endregion


  // neuer Stil mit Signal --> DEVELOPER PREVIEW
  book = input.required<Book>();
  tollesBuch = computed(() => this.book().title === 'Angular');


  rateUp = output<Book>();
  rateDown = output<Book>();

  doRateUp() {
    this.rateUp.emit(this.book());
  }

  doRateDown() {
    this.rateDown.emit(this.book());
  }
}
