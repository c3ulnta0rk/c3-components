import{b as v,c as C}from"./chunk-OU3IZBA3.js";import"./chunk-ROMPVTZG.js";import"./chunk-MBJBYIEM.js";import"./chunk-ENUS3AYZ.js";import{a as x}from"./chunk-OEYL6T2Z.js";import{d as f}from"./chunk-PEQUY4GQ.js";import"./chunk-OBP7XN6Z.js";import"./chunk-2I6A6QTS.js";import"./chunk-D2JVOI32.js";import"./chunk-24HI4LVF.js";import"./chunk-QFITDM3P.js";import{n as u}from"./chunk-5WXWLFM7.js";import{Ac as r,Sb as a,Tb as n,Ub as t,Zb as d,_b as c,ab as l,rb as s,vc as e}from"./chunk-RCGMRQ6T.js";var m=()=>({}),I=(()=>{let o=class o{};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=s({type:o,selectors:[["c3-file-input-examples"]],decls:34,vars:6,consts:[[1,"description"],["title",""],["example",""],[1,"note"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"]],template:function(i,h){i&1&&(n(0,"h1"),e(1,"File Input"),t(),n(2,"p",0),e(3,` A file input component that handles file uploads with progress tracking and XHR-based uploads. Includes a download service for fetching files as blobs.
`),t(),n(4,"example-viewer")(5,"h4",1),e(6,"Basic File Upload"),t(),d(7,2),n(8,"p",3),e(9," This example requires a backend server to handle uploads. Configure the "),n(10,"code"),e(11,"baseUrl"),t(),e(12," and "),n(13,"code"),e(14,"dest"),t(),e(15," inputs accordingly. "),t(),c(),n(16,"c3-example-viewer-tab",4)(17,"div")(18,"textarea",5),e(19,`<c3-input-file
  [accept]="'image/*'"
  [multiple]="true"
  [baseUrl]="'http://localhost:3000'"
  [dest]="'api/upload'"
  (fileAdded)="onFileAdded($event)">
</c3-input-file>

<button mat-raised-button (click)="fileInput.click()">
  Select Files
</button>
      `),t()()(),n(20,"c3-example-viewer-tab",6)(21,"div")(22,"textarea",7),e(23,`import { Component, ViewChild } from '@angular/core';
import { C3InputFileModule, C3InputFile } from 'c3-components';

@Component({
  selector: 'app-upload-example',
  standalone: true,
  imports: [C3InputFileModule],
  templateUrl: './upload-example.component.html',
})
export class UploadExampleComponent {
  @ViewChild(C3InputFileComponent) fileInput!: C3InputFileComponent;

  files: C3InputFile[] = [];

  onFileAdded(file: C3InputFile): void {
    this.files.push(file);

    // Subscribe to progress changes
    file.progressionChange.subscribe({
      next: (progress) => console.log(\`Progress: \${progress}%\`),
      complete: () => console.log('Upload complete!', file.response)
    });
  }

  cancelUpload(file: C3InputFile): void {
    file.emit('abord'); // Cancels the upload
  }
}
      `),t()()()(),n(24,"example-viewer")(25,"h4",1),e(26,"Download Service"),t(),d(27,2),n(28,"p",3),e(29," The download service provides a simple way to fetch files as Blobs. "),t(),c(),n(30,"c3-example-viewer-tab",6)(31,"div")(32,"textarea",7),e(33,`import { Component, inject } from '@angular/core';
import { C3DownloadService } from 'c3-components';

@Component({
  selector: 'app-download-example',
  template: \`<button (click)="download()">Download File</button>\`,
})
export class DownloadExampleComponent {
  private downloadService = inject(C3DownloadService);

  download(): void {
    this.downloadService.download('https://example.com/file.pdf')
      .subscribe(blob => {
        // Create download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'file.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }
}
      `),t()()()()),i&2&&(l(18),a("options",r(3,m)),l(4),a("options",r(4,m)),l(10),a("options",r(5,m)))},dependencies:[u,f,C,v,x],styles:[".description[_ngcontent-%COMP%]{color:var(--text-secondary);margin-bottom:2rem}.note[_ngcontent-%COMP%]{padding:1rem;background:var(--surface-elevated);border-left:3px solid var(--c3-accent);border-radius:var(--border-radius-md);color:var(--text-secondary);margin:0}.note[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-size:var(--text-sm)}"]});let p=o;return p})();export{I as FileInputExamplesComponent};
