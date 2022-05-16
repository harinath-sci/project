import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap, tap } from 'rxjs';
import { ImageUploadService } from 'src/app/services/image-upload.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
  ) { }

  ngOnInit(): void {
  }
  uploadFile(event: any,) {
    this.imageUploadService
      .uploadImage(event.target.files[0], `images/profile/`)
      .subscribe();
  }

}
