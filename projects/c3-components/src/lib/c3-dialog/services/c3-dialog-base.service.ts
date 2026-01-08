import { Injectable, inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
    providedIn: 'root'
})
export abstract class C3DialogBaseService {
    protected readonly _matDialog = inject(MatDialog);

    protected _open<T, D = any, R = any>(
        component: ComponentType<T>,
        config?: MatDialogConfig<D>
    ) {
        return this._matDialog.open<T, D, R>(component, config);
    }
}
