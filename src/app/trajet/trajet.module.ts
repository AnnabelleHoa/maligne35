/**
 * Created by Mookie on 28/05/2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../svg/svg.module';

import { TrajetComponent } from './trajet.component';

@NgModule({
  imports: [
    CommonModule,
    SvgModule
  ],
  declarations: [TrajetComponent],
  exports: [TrajetComponent]
})

export class TrajetModule {

}

