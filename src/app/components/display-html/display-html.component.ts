import {
  AfterViewInit,
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'display-html',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-html.component.html',
  styleUrls: ['./display-html.component.sass'],
})
export class DisplayHtmlComponent implements AfterViewInit {
  @ViewChild(TemplateRef) template!: TemplateRef<any>;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit(): void {
    console.log(this.template.createEmbeddedView(null).rootNodes[1].innerHTML);
  }
}
