import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { Book } from '../shared/book';

import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { BookCreateComponent } from '../book-create/book-create.component';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BookComponent, BookCreateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // weil wir Signals einsetzen, sind wir save
})
export class DashboardComponent /* implements OnInit */ {

  br = inject(BookRatingService);
  bs = inject(BookStoreService);

  // Alter Stil
  // books: Book[] = []

  // Neuer Stil - mit Signals
  books = signal<Book[]>([]);

  constructor() {
    // this.bs.getAllBooks().subscribe(books => this.books.set(books));
  }

  // ngOnInit() {
  //   this.bs.getAllBooks().subscribe(books => this.books.set(books));
  // }

  rateUpHandler(book: Book) {
    const ratedBook = this.br.rateUp(book);

    // const ratedBook = {
    //   ...book,
    //   rating: Math.min(book.rating + 1, 5)
    // }

    this.updateAndSort(ratedBook);
  }

  rateDownHandler(book: Book) {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {

    const newBooks = this.books()
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a,b) => b.rating - a.rating);

    this.books.set(newBooks);
  }

  createHandler(newBook: Book) {

    // immutable, mehr gute Praxis
    this.books.update(x => [...x, newBook].sort((a, b) => b.rating - a.rating));

    // NICHT immutable, aber massiv speicher eingespart
    // this.books().push(newBook);
    // this.books.set(this.books());


    // ODER

    // const newArray = [...this.books(), newBook].sort((a, b) => b.rating - a.rating);
    // this.books.set(newArray);
  }
}


