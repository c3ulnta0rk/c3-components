import { Injectable } from '@angular/core';
import { C3DialogBaseService } from './c3-dialog-base.service';
import { AlertConfig, C3AlertDialogComponent } from '../components/c3-dialog-alert.component';
import { Observable } from 'rxjs';

/**
 * Service to open alert dialogs.
 */
@Injectable({
    providedIn: 'root'
})
export class C3AlertService extends C3DialogBaseService {
    /**
     * Opens an alert dialog.
     * @param text The message to display.
     * @param data Optional configuration (custom accept text, width).
     * @returns Observable that completes when the alert is closed.
     */
    public alert(text: string, data?: AlertConfig): Observable<void> {
        const dialogRef = this._open<C3AlertDialogComponent, AlertConfig, void>(
            C3AlertDialogComponent,
            {
                width: data?.width || '250px',
                maxWidth: data?.maxWidth,
                data: {
                    text,
                    acceptText: data?.acceptText || 'OK',
                    width: data?.width,
                },
            }
        );

        return dialogRef.afterClosed();
    }
}
