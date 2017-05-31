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

  directionSelect= "";
  stationSelect: string;
  count= 0;
  prochainPassage: string;
  deuxiemePassage: string;
  depart: any;
  arrivee: any;
  trajet: any;

  attente: any;


  constructor(private _horaires: TrajetServices) {

  }

  MaDirection(direction) {
    this.directionSelect = direction;
    //console.log(this.directionSelect);
    document.getElementById('15').style.display = 'block';
    document.getElementById('2').style.display = 'block';
    document.getElementById('3').style.display = 'block';
    document.getElementById('14').style.display = 'block';
    document.getElementById('21').style.display = 'block';

    if (this.directionSelect == 'A') {
      console.log("Gare de l'Est");
      console.log(this.stationSelect);
      document.getElementById('15').style.display = 'none';
      document.getElementById('2').style.display = 'none';
    }
    else if (this.directionSelect == 'R') {
      console.log("Mairie d'Aubervilliers");
      console.log(this.stationSelect);
      document.getElementById('3').style.display = 'none';
      document.getElementById('14').style.display = 'none';
      document.getElementById('21').style.display = 'none';
    }

  }

  MaStation(station) {

    if (this.directionSelect!=""){
      this.stationSelect = station['0'].name;
      console.log(this.stationSelect);


      if (this.count == 0){
        this.depart = parseInt(station['0'].id);
        document.getElementById(this.depart).style.fill = 'red';

      }
      else if (this.count < 2){
        this.arrivee = parseInt(station['0'].id);
        document.getElementById(this.arrivee).style.fill = 'red';

        if (this.depart < this.arrivee){

          for (let i = this.depart; i < this.arrivee; i++){
            document.getElementById(i).style.fill = 'red';
          }
        }
        else if (this.depart > this.arrivee){
          for (let i = this.arrivee; i < this.depart; i++){
            document.getElementById(i).style.fill = 'red';
          }
        }

      }
      else {
        document.getElementById(this.depart).style.fill = 'black';
        document.getElementById(this.arrivee).style.fill = 'black';
        if (this.depart < this.arrivee){

          for (let i = this.depart; i < this.arrivee; i++){
            document.getElementById(i).style.fill = 'black';
          }
        }
        else if (this.depart > this.arrivee){
          for (let i = this.arrivee; i < this.depart; i++){
            document.getElementById(i).style.fill = 'black';
          }
        }

        this.depart = station['0'].id;
        document.getElementById(this.depart).style.fill = 'red';

        this.count = 0;
      }
      this.count ++;
    }
    else{
      alert("Veuillez sélectionner votre direction !");
    }
  }




  rechercheHoraires() {
    document.getElementById("moving-bus").style.paddingLeft = "2.5%";
    return this._horaires.getHorairesFromAPI(this.stationSelect, this.directionSelect).subscribe(
      res => {
        this.prochainPassage = res.result.schedules[0].message;
        this.deuxiemePassage = res.result.schedules[1].message;
        this.attente = 100-(parseInt(this.prochainPassage)*6);
        console.log(this.attente);
        if ( isNaN(this.attente)){
          document.getElementById("moving-bus").style.paddingLeft = "160%";
        }
        else{
          document.getElementById("moving-bus").style.paddingLeft = this.attente+"%";
        }
        document.getElementById("moving-bus").style.paddingLeft = this.attente+"%";

      },
      err => console.error(err.status)
    );



  }




}
