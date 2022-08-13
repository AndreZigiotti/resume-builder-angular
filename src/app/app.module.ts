import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from './modules/components/components.module';
import { PreviewComponent } from './components/preview/preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateOneComponent } from './templates/template-one/template-one.component';
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    TemplateOneComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
