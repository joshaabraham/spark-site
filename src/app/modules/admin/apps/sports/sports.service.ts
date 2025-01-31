import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
// import { Category, Course } from 'app/modules/admin/apps/sports/sports.types';
import { environment } from '../../../../../environments/environment';
import { apiRoutes } from '../../../../dataService/routes';
import { Sport } from './sports.types';

@Injectable({
    providedIn: 'root'
})
export class SportsService
{
    // Private
    private apiUrl = environment.apiURL;

    /**
     * Constructor
     */
    constructor(private http: HttpClient)
    {
    }

    /**
     * Get the list of sports
     */
    getSports(): Observable<Sport[]> {
        return this.http.get<Sport[]>(`${this.apiUrl}${apiRoutes.sportApp.sportList}`);
    }

    /**
     * Get the details of a sport by ID
     *
     * @param id
     */
    getSportById(id: number): Observable<Sport> {
        return this.http.get<Sport>(`${this.apiUrl}${apiRoutes.sportApp.sportDetail(id)}`);
    }

    /**
     * Get sports by category
     *
     * @param category
     */
    getSportsByCategory(category: string): Observable<Sport[]> {
        return this.http.get<Sport[]>(`${this.apiUrl}${apiRoutes.sportApp.sportList}`, {
            params: { category }
        });
    }

    /**
     * Get sport by code
     *
     * @param code
     */
        getSportByCode(code: string): Observable<Sport> {
            return this.http.get<Sport>(`${this.apiUrl}/sports/code/${code}`);
        }
}
