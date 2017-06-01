import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {StationsInterface} from './trajet/stations.interface';
import {TrajetServices} from './trajet/trajet.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  innerHeight: any;
  innerWidth: any;
  stations: StationsInterface[];
  body = document.getElementsByTagName('body')[0];

  constructor(private _router: Router, private _stations: TrajetServices) {
    this._router.events.subscribe((url: any) => console.log(url.url));
  }

  adjustPosition(innerHeightWindow) {
    document.getElementById('main-body').style.height = innerHeightWindow+"px";
  }


  ngOnInit() {
    let innerHeightWindow = parseInt(this.innerHeight.substring(0, this.innerHeight.length - 2));
    this.adjustPosition(innerHeightWindow);
    this._stations.getStationsFromAPI().subscribe(
      res => this.stations = res,
      err => console.error(err.status)
    );

  }


}

/*  subscribe((url: any) => {
 if (this.url.url === '/accueil') {
 this.body.style.background = url('../assets/img/background-accueil.jpg');
 else if (this.url.url === '/trajet') {
 this.body.style.background = url('../assets/img/background-trajet.jpg');
 }
 else if (this.url.url === '/grille') {
 this.body.style.background = url('../assets/img/background-trajet.jpg');
 }
 }, function (error){console.log('')}
 }
 );*/


