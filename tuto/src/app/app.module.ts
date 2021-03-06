import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeCvComponent,
    DetailCvComponent,
    CvComponent,
    ItemCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
