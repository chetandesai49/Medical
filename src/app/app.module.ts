import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componets/header/header.component';
import { FooterComponent } from './Componets/footer/footer.component';
import { HomeComponent } from './Componets/home/home.component';
import { PageNotFoundComponent } from './Componets/page-not-found/page-not-found.component';
import { MedicinesHomeComponent } from './Componets/medicines-home/medicines-home.component';
import { TopDealsComponent } from './Componets/top-deals/top-deals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    MedicinesHomeComponent,
    TopDealsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule 
    
    
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
