import { Book } from './book';
import { BookRatingService } from './book-rating.service';

// das F muss wieder weg!!!
fdescribe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;

  // Arrange
  beforeEach(() => {
    service = new BookRatingService();
    book = {
      isbn: '000',
      title: 'Test',
      description: 'Test',
      rating: 3
    }
  });

  it('should rate up a book by one', () => {
    // Act
    const ratedBook = service.rateUp(book);

    // Assert
    expect(ratedBook.rating).toBe(4);
  });

  it('should rate down a book by one', () => {
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  })

});
