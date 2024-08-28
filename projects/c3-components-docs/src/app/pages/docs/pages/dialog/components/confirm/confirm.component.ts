import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  C3DialogModule,
  C3DialogService,
} from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-confirm',
  standalone: true,
  imports: [CommonModule, C3DialogModule, MatButtonModule],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss',
})
export class ConfirmComponent {
  private readonly dialogService = inject(C3DialogService);

  public async openDialog() {
    const confirmResult = await this.dialogService.confirm({
      text: 'Are you sure you want to delete this item?',
      reject: {
        color: 'warn',
        text: 'Cancel',
      },
      accept: {
        color: 'primary',
        text: 'Delete',
      },
    });

    console.log(confirmResult);
  }
}
