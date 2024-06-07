import { Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';

import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
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

  rateUpHandler(book: Book) {
    const ratedBook = this.br.rateUp(book);
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
}


