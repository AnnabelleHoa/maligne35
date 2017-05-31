import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../svg/svg.module';
import { MapModule } from '../map/map.module';

import { TrajetComponent } from './trajet.component';

import { TrajetServices } from './trajet.service';

@NgModule({
  imports: [
    CommonModule,
    SvgModule,
    MapModule
  ],
  declarations: [TrajetComponent],
  exports: [TrajetComponent],
  providers: [TrajetServices]
})

export class TrajetModule {

}

