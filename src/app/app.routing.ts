// Created by Mookie on 27/05/2017.
import {Routes, RouterModule} from '@angular/router';

import {AccueilComponent} from './accueil/accueil.component';
import {GrilleComponent} from './grille/grille.component';
import {ArretComponent} from './arret/arret.component';
import {TrajetComponent} from './trajet/trajet.component';

// Configuration d'une constant appRoutes contenant une collection de nos routes
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'grille',
    component: GrilleComponent
  },
  {
    path: 'arret',
    component: ArretComponent
  },
  {
    path: 'trajet',
    component: TrajetComponent
  }
]

// Exportation du routing pour l'importer dans app.module.ts
export const routing = RouterModule.forRoot(appRoutes);
