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
    this.innerHeight = (window.screen.height) + "px";
    console.log(this.innerHeight);
    this.innerWidth = (window.screen.width) + "px";
    console.log(this.innerWidth);

    this._router.events.subscribe(function (url: any) {
      if (url.url == '/accueil') {
        this.body.style.background = url('../assets/img/background-accueil.jpg')
      else
        if (url.url == '/trajet') {
          this.body.style.background = url('../assets/img/background-trajet.jpg')
        }
        else if (url.url == '/grille') {
          this.body.style.background = url('../assets/img/background-trajet.jpg')
        }
      }
      ,
      function (error) {
        console.log('erreur')
      }

      );
  }
    ;
  }

  ngOnInit() {
    this._stations.getStationsFromAPI().subscribe(
      res => console.log(this.stations = res),
      err => console.error(err.status)
    );


  }

}
