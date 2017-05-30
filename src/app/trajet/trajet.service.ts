/**
 * Created by Mookie on 29/05/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class TrajetService{
  constructor(private _http:Http){

  }

/*  getDeparturesFromAPI() {
    return this._http.get('')
      .do(x => console.log(x))
      .map()
  }*/
}
