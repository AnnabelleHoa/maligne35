import {Component} from '@angular/core';

//import { MapService } from './map.service';

@Component({
  moduleId: module.id,
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})

export class MapComponent {
  lat: number = 48.87615667;
  lng: number = 2.357569912;
  zoom: number = 15;
  location: {};
  // markers: marker[] = [];

  setPosition(position){
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    return this.location;
  }

  getMyPosition(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    }
  }

  ngOnInit() {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    }
  }

/*  placeMarkerOnGeocodedStations(location:any){
    let marker ={
      lat: 0,
      lng: 0,
      title: "",
      draggable: false
    }
    this.markers.push(marker);
  }*/
}

/*
interface marker {
  lat : number,
  lng: number,
  title?: string,
  icon?: string,
  draggable: boolean
}
*/
