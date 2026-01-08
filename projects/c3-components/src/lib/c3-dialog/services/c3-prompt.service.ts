import { Injectable } from '@angular/core';
import { C3DialogBaseService } from './c3-dialog-base.service';
import { C3PromptDialogComponent, PromptConfig } from '../components/c3-dialog-prompt.component';
import { lastValueFrom } from 'rxjs';

/**
 * Service to open prompt dialogs for user input.
 */
@Injectable({
    providedIn: 'root'
})
export class C3PromptService extends C3DialogBaseService {

    /**
     * Opens a prompt dialog.
     * @param data Configuration for the prompt (text, default value, validation, etc.).
     * @returns Promise resolving to the input string if submitted, or `false` if cancelled.
     */
    public async prompt(data: PromptConfig): Promise<false | string> {
        const dialogRef = this._open<C3PromptDialogComponent, PromptConfig, string>(
            C3PromptDialogComponent,
            {
                width: data.width || '250px',
                maxWidth: data.maxWidth || '100vw',
                data: {
                    text: data.text,
                    value: data.value,
                    multiline: data.multiline,
                    rows: data.rows,
                    placeholder: data.placeholder,
                    defaultValue: data.defaultValue,
                    required: data.required,
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

        const result = await lastValueFrom(dialogRef.afterClosed());
        return result === undefined ? false : result;
    }
}
