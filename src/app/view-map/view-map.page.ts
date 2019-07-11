import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import omnivore from 'mapbox-gl';

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.page.html',
  styleUrls: ['./view-map.page.scss'],
})
export class ViewMapPage implements OnInit {

  map: mapboxgl.Map;
    style: 'mapbox://styles/mapbox/streets-v11'
    
    
    
  constructor() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhcmVzbW8iLCJhIjoiY2p4eGJpemFtMDRodTNtbXZ0OGl1cHpwciJ9.WR_94539LnsBUrTSNm4yRg'
  }


  ngOnInit() {
  }

  ionViewDidEnter(){
      this.buildMap();
  }

  buildMap(){
 this.map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-96, 37.8], // starting position
  zoom: 3 // starting zoom
 });

 this.map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  trackUserLocation: true
  }));

  this.map.scrollZoom.enable();
  this.map.addControl(new mapboxgl.NavigationControl());

  var runLayer = omnivore.gpx('../assets/data/run.gpx')
    .on('ready', function() {
        this.map.fitBounds(runLayer.getBounds());
    })
    .addTo(this.map);

 


  }

  

}
