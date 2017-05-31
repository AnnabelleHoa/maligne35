import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../svg/svg.module';

import { ArretComponent } from './arret.component';

@NgModule({
  imports: [
    CommonModule,
    SvgModule
  ],
  declarations: [ArretComponent],
  exports: [ArretComponent]
})

export class ArretModule{}
