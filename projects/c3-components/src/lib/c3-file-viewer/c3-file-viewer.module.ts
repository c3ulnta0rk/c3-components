import { NgModule } from '@angular/core';
import { FullScreenDirective } from './directives/full-screen.directive';
import { C3FileViewerComponent } from './components/public/c3-file-viewer/c3-file-viewer.component';
import { CommonModule } from '@angular/common';
import { C3FileViewerActionsComponent } from './components/c3-file-viewer-actions/c3-file-viewer-actions.component';
import { C3FileViewerImageComponent } from './components/c3-file-viewer-image/c3-file-viewer-image.component';
import { C3FileViewerPdfComponent } from './components/c3-file-viewer-pdf/c3-file-viewer-pdf.component';
import { C3FileViewerVideoComponent } from './components/c3-file-viewer-video/c3-file-viewer-video.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { C3SafeUrlPipe } from '../../public-api';
import { C3FileViewerDialogComponent } from './components/public/c3-file-viewer-dialog/c3-file-viewer-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { C3FileViewerDialog } from './components/public/c3-file-viewer-dialog/c3-file-viewer-dialog';

@NgModule({ declarations: [
        FullScreenDirective,
        C3FileViewerComponent,
        C3FileViewerActionsComponent,
        C3FileViewerImageComponent,
        C3FileViewerPdfComponent,
        C3FileViewerVideoComponent,
        C3FileViewerDialogComponent,
        C3FileViewerDialog,
    ],
    exports: [
        FullScreenDirective,
        C3FileViewerComponent,
        C3FileViewerDialogComponent,
    ], imports: [CommonModule, C3SafeUrlPipe, MatDialogModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class C3FileViewerModule {}
