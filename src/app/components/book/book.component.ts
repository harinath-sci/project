import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { IBook } from 'src/app/book.model';
import { BookService } from 'src/app/services/book.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: IBook = { name: '', ifsc: 0, account: 0};
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.bookService.addBook(form.value).
      then(() => form.reset());
  }
}
