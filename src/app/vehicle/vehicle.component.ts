import { Component, OnInit } from '@angular/core';
import { veh } from '../vehicle.model';
import { BookService } from '../services/book.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  veh: veh = { name: '', location: '', email: ''};
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.bookService.addB(form.value).
      then(() => form.reset());
  }
}
