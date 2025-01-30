import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { apiRoutes } from '../../../../dataService/routes';
import { SportEvent } from './events.types';


@Injectable({
    providedIn: 'root'
})
export class EventsService {
    private apiUrl = environment.apiURL;

    constructor(private http: HttpClient) {}

    /**
     * Get the list of sports events
     */
    getEvents(): Observable<SportEvent[]> {
        return this.http.get<SportEvent[]>(`${this.apiUrl}${apiRoutes.associationApp.sportEventsCreateList}`);
    }

    /**
     * Get the details of a sports event by ID
     *
     * @param id
     */
    getEvent(id: number): Observable<SportEvent> {
        return this.http.get<SportEvent>(`${this.apiUrl}${apiRoutes.associationApp.sportEventDetail(id)}`);
    }

    /**
     * Create a new sports event
     *
     * @param event
     */
    createEvent(event: Event): Observable<SportEvent> {
        return this.http.post<SportEvent>(`${this.apiUrl}${apiRoutes.associationApp.sportEventsCreateList}`, event);
    }

    /**
     * Update a sports event by ID
     *
     * @param id
     * @param event
     */
    updateEvent(id: number, event: Event): Observable<SportEvent> {
        return this.http.put<SportEvent>(`${this.apiUrl}${apiRoutes.associationApp.sportEventDetail(id)}`, event);
    }

    /**
     * Delete a sports event by ID
     *
     * @param id
     */
    deleteEvent(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}${apiRoutes.associationApp.sportEventDetail(id)}`);
    }
}
