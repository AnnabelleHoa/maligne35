import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class TrajetServices{


  constructor(private _http:Http){

  }

  getStationsFromAPI() {
    return this._http.get('https://api-ratp.pierre-grimaud.fr/v3/stations/bus/35')
      //.do(x => console.log(x))
      .map(stations => stations.json())
  }

  getHorairesFromAPI(stationDepart, direction) {
    return this._http.get('https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/35/'+stationDepart+'/'+direction)
     // .do(x => console.log(x))
      .map(stations => stations.json())
  }

}
