import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss']
})
export class MapModalComponent implements OnInit {


  center: google.maps.LatLngLiteral;
  markerPosition: google.maps.LatLngLiteral;
  // markerPosition = { lat: 48.8566, lng: 2.3522 }; // Paris en exemple
  zoom = 15;

  constructor(public dialogRef: MatDialogRef<MapModalComponent>) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.markerPosition = this.center;
    });
  }

  close(): void {
    this.dialogRef.close();
  }

}
