import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import {  ReactiveFormsModule } from '@angular/forms';
import { AddHeroComponent } from './heros/add-hero/add-hero.component';
import { HeroListComponent } from './heros/hero-list/hero-list.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateHeroComponent } from './heros/update-hero/update-hero.component';

@NgModule({
  declarations: [
    AppComponent, 
    AddHeroComponent,
    HeroListComponent,
    HeaderComponent,
    NotFoundComponent,
    UpdateHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
