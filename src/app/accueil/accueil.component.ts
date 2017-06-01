/**
 * Created by Mookie on 27/05/2017.
 */
import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-accueil',
  templateUrl: 'accueil.component.html',
  styleUrls: ['accueil.component.css']
})

export class AccueilComponent {
  innerHeight:any;
  innerWidth:any;

  constructor() {
    this.innerHeight = (window.screen.height) + 'px';
    console.log(this.innerHeight);
    this.innerWidth = (window.screen.width) + 'px';
    console.log(this.innerWidth);

  }
}
