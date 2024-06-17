import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocsComponent } from './components/docs/docs.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HighlightJsModule } from 'ngx-highlight-js';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DocsComponent, HomeComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    NavbarComponent,
    HighlightJsModule,
  ],
  providers: [],
  bootstrap: [DocsComponent],
})
export class AppModule {}
