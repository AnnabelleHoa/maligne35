import {Component} from '@angular/core';

// Collections
import {DIRECTIONGE} from '../apiCollection/directionge.collection';
import {DIRECTIONMA} from '../apiCollection/directionma.collection';
import {HorairesInterface} from '../trajet/horaires.interface';
import {TrajetServices} from './trajet.service';


@Component({
  moduleId: module.id,
  selector: 'app.trajet',
  templateUrl: 'trajet.component.html',
  styleUrls: ['trajet.component.css']
})

export class TrajetComponent {
  directionGeItems = DIRECTIONGE;
  directionMaItems = DIRECTIONMA;

  directionSelect = "A";
  stationSelect: string;
  //count= 0;
  prochainPassage: string;
  deuxiemePassage: string;


  constructor(private _horaires: TrajetServices) {
  }

  MaStation(station) {
    this.stationSelect = station;
    console.log(this.stationSelect);
  }

  MaDirection(direction) {
    this.directionSelect = direction;
    console.log(this.directionSelect);
  }


  rechercheHoraires() {

    return this._horaires.getHorairesFromAPI(this.stationSelect, this.directionSelect).subscribe(
      res => {
        this.prochainPassage = res.result.schedules[0].message;
        this.deuxiemePassage = res.result.schedules[1].message

      },
      err => console.error(err.status)
    );

    /*return this._horaires.getHorairesFromAPI(this.stationSelect, this.directionSelect).subscribe(
     res => console.log(this.deuxiemePassage = res.result.schedules[1]),
     err => console.error(err.status)
     );*/


    /*this.count = this.count +1;
     if (this.count == 1){
     console.log(this.stationSelect);
     this._horaires.getHorairesFromAPI(this.stationSelect).subscribe(
     res => console.log(this.horaires = res),
     err => console.error(err.status)
     );
     }
     else if (this.count == 2){
     console.log(this.stationSelect);
     }

     else {
     this.count=0;
     console.log(this.stationSelect);
     }*/
  }


}
