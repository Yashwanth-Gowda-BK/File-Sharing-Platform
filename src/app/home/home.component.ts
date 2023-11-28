import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../models/fileupload';
import { UploadService } from '../service/upload.service';
import { map } from 'rxjs/internal/operators/map';
import { Subscription } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  files:any[];
  subscription:Subscription;

  constructor(public route: Router ,private uploadService: UploadService,public auth:AuthService) { 
    this.subscription = this.uploadService.getAll().snapshotChanges().subscribe(files => this.files = files)
  }

  ngOnInit(): void {
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(newfile,desc): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload,desc.value).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
    newfile.value = ""
    desc.value = ''
  }

  deleteFileUpload(fileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }

  clear(file,desc){
    file.value = ''
    desc.value = ''
  }

  open(p){
    window.open(p.payload.val().url)
  }

  
}
