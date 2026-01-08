import { Injectable } from '@angular/core';
import { C3DialogBaseService } from './c3-dialog-base.service';
import { ConfirmConfig, ConfirmDialogComponent } from '../components/c3-dialog-confirm.component';
import { lastValueFrom } from 'rxjs';

/**
 * Service to open confirmation dialogs.
 */
@Injectable({
    providedIn: 'root'
})
export class C3ConfirmService extends C3DialogBaseService {

    /**
     * Opens a confirm dialog.
     * @param data Configuration for the dialog (text, accept/reject labels/colors).
     * @returns Promise resolving to `true` if accepted, `false` otherwise.
     */
    public async confirm(data: ConfirmConfig): Promise<boolean> {
        const dialogRef = this._open<ConfirmDialogComponent, ConfirmConfig, boolean>(
            ConfirmDialogComponent,
            {
                width: data.width || '250px',
                maxWidth: data.maxWidth,
                data: {
                    text: data.text,
                    reject: {
                        color: data.reject?.color,
                        text: data.reject?.text || 'Annuler',
                    },
                    accept: {
                        color: data.accept?.color || 'primary',
                        text: data.accept?.text || 'Accepter',
                    },
                },
            }
        );

        return (await lastValueFrom(dialogRef.afterClosed())) ?? false;
    }
}
