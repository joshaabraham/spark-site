import { Component, OnInit } from '@angular/core';
import { UserStateManager } from 'app/dataService/stateManager/user.state.manager';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private _userStateManager: UserStateManager) {}

    ngOnInit(): void {
        this.getUserLocation();
    }

    /**
     * Get the user's location and persist it in the UserStateManager
     */
    getUserLocation(): void {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const coordinates = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                this._userStateManager.setCoordinates(coordinates);
            }, (error) => {
                console.error('Error getting location', error);
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }
}
