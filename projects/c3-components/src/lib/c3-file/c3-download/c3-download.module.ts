import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C3DownloadService } from './c3-download.service';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  imports: [CommonModule],
  providers: [C3DownloadService, provideHttpClient(withInterceptorsFromDi())],
})
export class C3DownloadModule {}
