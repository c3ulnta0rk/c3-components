import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'c3-file-display-icon',
    imports: [CommonModule, MatIconModule],
    templateUrl: './c3-file-display-icon.component.html',
    styleUrl: './c3-file-display-icon.component.scss'
})
export class C3FileDisplayIconComponent {
  public readonly fileType = input.required<string>();

  public readonly displayedIcon = computed(() => {
    switch (this.fileType()) {
      case 'image/webp':
      case 'image/png':
      case 'image/jpeg':
      case 'image/jpg':
        return 'image';
      case 'video/mp4':
      case 'video/webm':
        return 'play_circle';
      case 'application/pdf':
        return 'picture_as_pdf';
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return 'description';
      default:
        return 'content_copy';
    }
  });

  public readonly color = computed(() => {
    switch (this.fileType()) {
      case 'image/webp':
      case 'image/png':
      case 'image/jpeg':
      case 'image/jpg':
        return 'text-primary';
      case 'video/mp4':
      case 'video/webm':
        return 'text-secondary';
      case 'application/pdf':
        return 'text-error';
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return 'text-success';
      default:
        return 'text-gray';
    }
  });
}
