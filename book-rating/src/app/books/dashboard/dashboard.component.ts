import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe, UpperCasePipe } from '@angular/common';

import { Pipe, PipeTransform } from '@angular/core';
import { BookComponent } from '../book/book.component';

@Pipe({
  name: 'blubb',
  standalone: true
})
export class BlubbPipe implements PipeTransform {

  transform(value: string): string {
    return value + 'blubb';
  }

}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe, UpperCasePipe, BlubbPipe, BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  // 🦆
  // TODO: signal!
  books: Book[] = [
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
  ];
}


