import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MemberForm } from './components/member-form/member-form';
import { BookList } from './components/book-list/book-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MemberForm, RouterLink, BookList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('library-management');
}
