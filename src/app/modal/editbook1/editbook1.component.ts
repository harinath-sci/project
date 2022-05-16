import { Component, OnInit , Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { det } from 'src/app/detail.model';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-editbook1',
  templateUrl: './editbook1.component.html',
  styleUrls: ['./editbook1.component.css']
})
export class Editbook1Component implements OnInit {
  @Input()
  id!: string;
  book!: det;
  constructor(private bookService: BookService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if (this.id)
      this.bookService.getBookByID1(this.id).subscribe(res => {
        this.book = res
      });
  }
  onUpdate() {
    this.bookService.updateBook1(this.book).then(() => {
      this.activeModal.close();
      console.log('Data add successfully');
    })
  }

}
