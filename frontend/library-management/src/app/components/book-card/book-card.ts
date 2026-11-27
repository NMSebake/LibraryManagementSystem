import { ChangeDetectorRef, Component } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (data: Book[]) => {
        this.books = data;

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching books:', err);
      },
    });
  }

  viewDetails(title: String): void {
    alert(`Viewing details for ${title}`);
  }
}
