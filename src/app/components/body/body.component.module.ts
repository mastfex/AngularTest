import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BodyTemplate } from './body.component';
import { ClientInformationTemplate } from './clientInformation/clientInfo.component';


@NgModule({
  declarations: [

  ],
  exports: [
    BodyTemplate,
  ],
  imports: [
    BrowserModule,
    ClientInformationTemplate
  ],
  providers: [],
  bootstrap: [BodyTemplate],


})
export class AppModule { }
