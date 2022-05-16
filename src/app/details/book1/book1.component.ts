import { Component, OnInit } from '@angular/core';
import { det } from 'src/app/detail.model';
import { BookService } from 'src/app/services/book.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-book1',
  templateUrl: './book1.component.html',
  styleUrls: ['./book1.component.css']
})
export class Book1Component implements OnInit {
  det: det = { cname: '', fname: '', mname: '',address : '',pin : 0,number:0};
  constructor(private bookervice : BookService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.bookervice.addd(form.value).
      then(() => form.reset());
  }

}
