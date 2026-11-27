import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-member-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './member-form.html',
  styleUrl: './member-form.css',
})
export class MemberForm implements OnInit {
  memberform!: FormGroup;
  // books: Book[] = [];

  // constructor(private fb: FormBuilder, private bookService: BookService)
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.memberform = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      cellnumber: [''],
      dateofbirth: [''],
      address: [''],
    });
  }
}
