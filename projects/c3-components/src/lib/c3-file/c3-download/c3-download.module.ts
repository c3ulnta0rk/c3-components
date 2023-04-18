import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C3DownloadService } from './c3-download.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [C3DownloadService],
})
export class C3DownloadModule {}
