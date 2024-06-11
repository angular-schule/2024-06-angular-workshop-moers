import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';

import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { BookCreateComponent } from '../book-create/book-create.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BookComponent, BookCreateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // weil wir Signals einsetzen, sind wir save
})
export class DashboardComponent {

  br = inject(BookRatingService);

  // Alter Stil
  // books: Book[] = []

  // Neuer Stil - mit Signals
  books = signal<Book[]>([
    {
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5
    },
    {
      isbn: '111',
      title: 'Knockout Buch',
      description: 'Leider veraltet ',
      rating: 3
    },
    {
      isbn: '333',
      title: 'jQuery',
      description: 'Uraltes Buch',
      rating: 1
    }
  ]);

  // constructor() {
  //   setTimeout(() => this.books.set([]), 3000)
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


