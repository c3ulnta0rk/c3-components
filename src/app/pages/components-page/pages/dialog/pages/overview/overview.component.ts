import { Component } from '@angular/core';
import { C3DialogService } from 'c3-components';

@Component({
  template: '<p>example-custom-component-dialog works!</p>',
})
export class ExampleCustomComponentDialogComponent {}

@Component({
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass'],
})
export class DialogOverviewComponent {
  constructor(private _c3Dialog: C3DialogService) {}

  openPromptDialog() {
    this._c3Dialog
      .prompt({
        text: 'Enter your name',
        defaultValue: 'John Doe',
        placeholder: 'John Doe',
        multiline: false,
        validators: [],
        required: true,
      })
      .then((result) => {
        if (result) {
          console.log('result', result);
        }
      });
  }

  openConfirmDialog() {
    return this._c3Dialog.confirm({
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
  }

  openCustomDialog() {
    this._c3Dialog
      .createDialgFromComponent<ExampleCustomComponentDialogComponent>({
        data: {
          component: ExampleCustomComponentDialogComponent,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          console.log('result', result);
        }
      });
  }
}
