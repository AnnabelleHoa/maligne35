import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-svg',
  templateUrl: 'svg.component.html',
  styleUrls: ['svg.component.css']
})

export class SvgComponent{

  @Output() InfoStationSelect = new EventEmitter();

  station: string;
  groupeId: string;

  infoStation= [{id: '', name: ''}];

  getMonArret(idStation: any){

    //console.log(idStation);
    this.station = idStation.target.id;
    //console.log(this.station);

    this.groupeId = idStation.path['1'].id;
    //console.log(this.groupeId);

    this.infoStation = [{id: this.groupeId, name: this.station}]
    //console.log(this.infoStation);

    this.InfoStationSelect.emit(this.infoStation);


  }

}
