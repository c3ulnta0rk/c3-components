import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  C3DialogModule,
  C3DialogService,
} from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-alert',
  standalone: true,
  imports: [C3DialogModule, MatButtonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  private readonly dialogService = inject(C3DialogService);

  public async openDialog() {
    this.dialogService.alert('Je suis une alerte').subscribe();
  }
}
