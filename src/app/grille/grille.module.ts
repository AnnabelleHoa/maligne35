import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrilleComponent } from './grille.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GrilleComponent],
  exports: [GrilleComponent]
})

export class GrilleModule{}
