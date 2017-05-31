import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenuModule } from './menu/menu.module';
import { GrilleModule } from './grille/grille.module';
import { TrajetModule } from './trajet/trajet.module';
import { AccueilModule } from './accueil/accueil.module';
import { MapModule } from './map/map.module';
import {routing} from './app.routing';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MenuModule,
    GrilleModule,
    TrajetModule,
    AccueilModule,
    MapModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
