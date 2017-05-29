import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { GrilleModule } from './grille/grille.module';
import { ArretModule } from './arret/arret.module';



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
    ArretModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
