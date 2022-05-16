import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap, tap } from 'rxjs';
import { ImageUploadService } from 'src/app/services/image-upload.service';
@Component({
  selector: 'app-fileu',
  templateUrl: './fileu.component.html',
  styleUrls: ['./fileu.component.css']
})
export class FileuComponent implements OnInit {

  constructor(
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
  ) { }

  ngOnInit(): void {
  }
  uploadFile(event: any,) {
    this.imageUploadService
      .uploadImage(event.target.files[0], `images/profile/`)
      .pipe(
        this.toast.observe({
          loading: 'Uploading profile image...',
          success: 'Image uploaded successfully',
          error: 'There was an error in uploading the image',
        }),
      )
      .subscribe();
  }

}
