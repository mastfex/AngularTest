import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyTemplate } from './components/body/body.component';
import {HeaderComponent} from './components/header/header.component';
import { ClientInformationTemplate } from './components/body/clientInformation/clientInfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyTemplate,
    ClientInformationTemplate,

  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
