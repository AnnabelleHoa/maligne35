import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-svg',
  templateUrl: 'svg.component.html',
  styleUrls: ['svg.component.css']
})

export class SvgComponent{

  @Output() stationSelection = new EventEmitter();

  station: string;

  getMonArret(idStation){

    this.station= idStation.target.id;
    //console.log(this.station);
    this.stationSelection.emit(this.station);
  }

}
