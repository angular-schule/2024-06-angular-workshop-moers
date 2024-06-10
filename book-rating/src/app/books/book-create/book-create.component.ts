import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {


  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    description: new FormControl('', {
      nonNullable: true
    }),
    rating: new FormControl<number>(1, {
      nonNullable: true,
      validators: [Validators.min(1), Validators.max(5)]
    })
  });

  c = this.bookForm.controls;

  showError(control: FormControl) {
    return control.invalid && control.touched;
  }

  submitForm() {
    const newBook = this.bookForm.getRawValue();

    // ???

    this.bookForm.reset();
  }
}
