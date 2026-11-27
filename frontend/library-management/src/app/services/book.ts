import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseURL = 'Http://localhost:3000';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseURL}/books`);
  }

  // Not yet needed
  // addBook(book: Book): void {
  //   this.books.push(book);
  // }
}
