import { Component, input } from '@angular/core';
import { C3DialogService } from 'c3-components';
import 'highlight.js';

@Component({
  template: '<p>example-custom-component-dialog works!</p>',
})
export class ExampleCustomComponentDialogComponent {}

@Component({
  template: '<p>{{ text() }}</p>',
})
export class ExampleCustomComponentWithInput {
  public readonly text = input('Hello World');
}

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
      .createDialogFromComponent<ExampleCustomComponentDialogComponent>({
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

  openCustomDialogWithToolbar() {
    this._c3Dialog
      .createDialogFromComponent<ExampleCustomComponentDialogComponent>({
        data: {
          component: ExampleCustomComponentDialogComponent,
          toolbar: {
            title: 'Custom Dialog',
            closeBtn: true,
            closeColor: 'warn',
            color: 'primary',
          },
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          console.log('result', result);
        }
      });
  }

  openCustomDialogWithProvidedInputs() {
    this._c3Dialog
      .createDialogFromComponent({
        data: {
          component: ExampleCustomComponentWithInput,
          inputs: {
            text: 'Hello World modified!',
          },
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
