import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subscription, catchError, map, of, throwError } from 'rxjs';
import { C3InputFile } from '../class/c3-input-file';

export interface FileUploadConfig {
    url: string;
    method?: string;
    headers?: { [key: string]: string };
}

@Injectable({
    providedIn: 'root'
})
export abstract class C3FileUploaderService {
    /**
     * Uploads a file and manages its progress in the C3InputFile object.
     * @param file The Angular C3InputFile wrapper
     * @param rawFile The native File object
     * @param config configuration for the upload (url, method, headers)
     */
    abstract upload(file: C3InputFile, rawFile: File, config: FileUploadConfig): Subscription;
}

@Injectable({
    providedIn: 'root'
})
export class C3DefaultFileUploaderService extends C3FileUploaderService {
    private _http = inject(HttpClient);

    upload(file: C3InputFile, rawFile: File, config: FileUploadConfig): Subscription {
        const formData = new FormData();
        formData.append('upload', rawFile);

        return this._http.request(config.method || 'POST', config.url, {
            body: formData,
            headers: config.headers,
            reportProgress: true,
            observe: 'events'
        }).pipe(
            catchError((error: HttpErrorResponse) => {
                console.error('Upload error', error);
                file.emit('error', error);
                return throwError(() => error);
            })
        ).subscribe((event) => {
            if (event.type === HttpEventType.UploadProgress && event.total) {
                file.progression = Math.round((event.loaded / event.total) * 100);
            } else if (event.type === HttpEventType.Response) {
                const body: any = event.body;
                file.name = body?.name || file.fileName;
                file.id = body?.id;
                file.path = body?.path;
                file.response = body;

                if (file.progression !== 100) file.progression = 100;
                file.progressionChange.complete();
                file.emit('completed');
            }
        });
    }
}
