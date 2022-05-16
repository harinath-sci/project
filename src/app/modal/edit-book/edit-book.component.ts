import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IBook } from 'src/app/book.model';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Input()
  id!: string;
  book!: IBook;
  constructor(
    private bookService: BookService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    if (this.id)
      this.bookService.getBookByID(this.id).subscribe(res => {
        this.book = res
      });
  }
  onUpdate() {
    this.bookService.updateBook(this.book).then(() => {
      this.activeModal.close();
      console.log('Data add successfully');
    })
  }

}
