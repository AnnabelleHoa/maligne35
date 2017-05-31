import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgmCoreModule} from 'angular2-google-maps/core';
//import { MapService } from './map.service';

import { MapComponent } from './map.component';


@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7EgOhkFeUWP73yLxxlm25lLUGtZtUXgc'
    })
  ],
  declarations: [MapComponent],
  exports: [MapComponent],
})

export class MapModule{}
