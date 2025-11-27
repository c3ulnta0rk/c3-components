
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EmbededExampleComponent } from '../embededComponent/embededComponent.component';
import { C3DialogModule, C3DialogService } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-embeded-component-with-actions',
  imports: [C3DialogModule, MatButtonModule],
  templateUrl: './embededComponentWithActions.component.html',
  styleUrl: './embededComponentWithActions.component.scss',
})
export class EmbededComponentWithActionsComponent {
  private readonly dialogService = inject(C3DialogService);

  public openDialog() {
    const dialog = this.dialogService.createDialogFromComponent({
      component: EmbededExampleComponent,
      data: {
        exampleInput: 'Hello word',
      },
      toolbar: {
        title: 'This is a mounted component',
        closeBtn: true,
      },
      actions: [
        {
          label: 'Cancel',
          action: () => {
            dialog.close()
          },
        },
        {
          label: 'Save',
          apperance: 'raised',
          action: () => {
            console.log('Save');
          },
        },
      ],
    });
  }
}
