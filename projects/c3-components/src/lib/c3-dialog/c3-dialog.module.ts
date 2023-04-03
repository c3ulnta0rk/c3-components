import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { ConfirmDialogComponent } from './components/c3-dialog-confirm.component';
import { C3DialogEmbedChildComponent } from './components/c3-dialog-embed-child.component';
import { C3PromptDialogComponent } from './components/c3-dialog-prompt.component';
import { C3DialogService } from './services/c3-dialog.service';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    C3PromptDialogComponent,
    C3DialogEmbedChildComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [C3DialogService],
})
export class C3DialogModule {}
