import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { GrilleModule } from './grille/grille.module';
import { TrajetModule } from './trajet/trajet.module';
import { AccueilModule } from './accueil/accueil.module';
import {routing} from './app.routing';



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
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
