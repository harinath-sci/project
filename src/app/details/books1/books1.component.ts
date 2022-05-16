import { Component, OnInit } from '@angular/core';
import { det } from 'src/app/detail.model';
import { BookService } from 'src/app/services/book.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Editbook1Component } from 'src/app/modal/editbook1/editbook1.component';
@Component({
  selector: 'app-books1',
  templateUrl: './books1.component.html',
  styleUrls: ['./books1.component.css']
})
export class Books1Component implements OnInit {
  books: det[] = [];
  constructor(private bookService: BookService,private modal: NgbModal) { }

  ngOnInit(): void {
    this.bookService.getBooks1().subscribe((res: det[]) => {
      this.books = res;
    })
  }
  editModal1(a: det) {
    const modalRef = this.modal.open(Editbook1Component, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });

    modalRef.componentInstance.id = a.id;
  }
  deleteBook1(book: det) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.bookService.deleteBook1(book).then(() => 
       console.log('delete successful'));
    }
  }

}
