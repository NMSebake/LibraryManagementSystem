import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { BookCard } from '../book-card/book-card';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule, BookCard],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})

// export class BookList implements OnInit {
export class BookList {
  // books: Book[] = [];

  // constructor(
  //   private bookService: BookService,
  //   private cdr: ChangeDetectorRef,
  // ) {}

  // ngOnInit(): void {
  //   this.bookService.getBooks().subscribe({
  //     next: (data: Book[]) => {
  //       this.books = data;

  //       this.cdr.detectChanges();
  //     },
  //     error: (err) => {
  //       console.error('Error fetching books:', err);
  //     },
  //   });
  // }

  // viewDetails(title: String): void {
  //   alert(`Viewing details for ${title}`);
  // }
  // ngOnInit(): void {
  //   this.loadBooks();
  // }

  // loadBooks(): void {
  //   this.bookService.getBooks().subscribe({
  //     next: (data) => {
  //       this.books = data;
  //       console.log('Books retrieved:', this.books);
  //     },
  //     error: (err) => {
  //       console.error('Error retrieving books:', err);
  //     },
  //   });
  // }
  // getBooks(): Book[] {
  //   return this.books;
  // }
}
