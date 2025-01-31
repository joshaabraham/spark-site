import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from './events.service';
import { SportEvent } from './events.types';

@Injectable({
    providedIn: 'root'
})
export class EventsResolver implements Resolve<SportEvent[]> {
    constructor(private _eventsService: EventsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SportEvent[]> {
        return this._eventsService.getEvents();
    }
}

@Injectable({
    providedIn: 'root'
})
export class EventResolver implements Resolve<SportEvent> {
    constructor(private _eventsService: EventsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SportEvent> {
        const id = route.paramMap.get('id');
        return this._eventsService.getEvent(Number(id));
    }
}
