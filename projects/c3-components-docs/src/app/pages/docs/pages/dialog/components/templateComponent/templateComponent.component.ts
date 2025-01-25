import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { C3DialogModule } from 'projects/c3-components/src/public-api';
import { InnerComponentComponent } from "./inner-component/inner-component.component";

@Component({
  selector: 'c3-template-component',
  imports: [C3DialogModule, MatButtonModule, InnerComponentComponent],
  templateUrl: './templateComponent.component.html',
  styleUrl: './templateComponent.component.scss',
})
export class TemplateComponentComponent { }
