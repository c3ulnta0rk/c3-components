import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ConfirmDialogComponent } from './components/c3-dialog-confirm.component';
import { C3DialogEmbedChildComponent } from './components/c3-dialog-embed-child.component';
import { C3PromptDialogComponent } from './components/c3-dialog-prompt.component';
import { C3DialogService } from './services/c3-dialog.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { C3AlertDialogComponent } from './components/c3-dialog-alert.component';

@NgModule({
  declarations: [
    C3AlertDialogComponent,
    ConfirmDialogComponent,
    C3PromptDialogComponent,
    C3DialogEmbedChildComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [C3DialogService],
})
export class C3DialogModule {}
