/**
 * Created by Mookie on 28/05/2017.
 */
import { Component } from '@angular/core';

// Collections
import { DIRECTIONGE } from '../apiCollection/directionge.collection';
import { DIRECTIONMA } from '../apiCollection/directionma.collection';

@Component({
  moduleId: module.id,
  selector: 'app.trajet',
  templateUrl: 'trajet.component.html',
  styleUrls: ['trajet.component.css']
})

export class TrajetComponent{
  directionGeItems = DIRECTIONGE;
  directionMaItems = DIRECTIONMA;
}
