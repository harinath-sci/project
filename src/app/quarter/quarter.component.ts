import { Component, OnInit } from '@angular/core';
import { quar } from '../quar.model';
import { BookService } from '../services/book.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-quarter',
  templateUrl: './quarter.component.html',
  styleUrls: ['./quarter.component.css']
})
export class QuarterComponent implements OnInit {
  qr: quar = { name: '', persons: 0, email: '',type:''};
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.bookService.addQ(form.value).
      then(() => form.reset());
  }
}
