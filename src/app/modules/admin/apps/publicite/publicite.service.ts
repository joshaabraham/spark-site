import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { apiRoutes } from '../../../../dataService/routes';
import { CampagnePublicitaire, Publicite } from './publicite.types';

@Injectable({
    providedIn: 'root'
})
export class PubliciteService {
    private apiUrl = environment.apiURL;

    constructor(private http: HttpClient) {}

    // Campagnes Publicitaires
    getCampagnes(): Observable<CampagnePublicitaire[]> {
        return this.http.get<CampagnePublicitaire[]>(`${this.apiUrl}${apiRoutes.publiciteApp.campagnesCreateList}`);
    }

    getCampagne(id: number): Observable<CampagnePublicitaire> {
        return this.http.get<CampagnePublicitaire>(`${this.apiUrl}${apiRoutes.publiciteApp.campagneDetail(id)}`);
    }

    createCampagne(data: CampagnePublicitaire): Observable<CampagnePublicitaire> {
        return this.http.post<CampagnePublicitaire>(`${this.apiUrl}${apiRoutes.publiciteApp.campagnesCreateList}`, data);
    }

    updateCampagne(id: number, data: CampagnePublicitaire): Observable<CampagnePublicitaire> {
        return this.http.put<CampagnePublicitaire>(`${this.apiUrl}${apiRoutes.publiciteApp.campagneDetail(id)}`, data);
    }

    deleteCampagne(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}${apiRoutes.publiciteApp.campagneDetail(id)}`);
    }

    // Publicités
    getPublicites(): Observable<Publicite[]> {
        return this.http.get<Publicite[]>(`${this.apiUrl}${apiRoutes.publiciteApp.publicitesCreateList}`);
    }

    getPublicite(id: number): Observable<Publicite> {
        return this.http.get<Publicite>(`${this.apiUrl}${apiRoutes.publiciteApp.publiciteDetail(id)}`);
    }

    createPublicite(data: Publicite): Observable<Publicite> {
        return this.http.post<Publicite>(`${this.apiUrl}${apiRoutes.publiciteApp.publicitesCreateList}`, data);
    }

    updatePublicite(id: number, data: Publicite): Observable<Publicite> {
        return this.http.put<Publicite>(`${this.apiUrl}${apiRoutes.publiciteApp.publiciteDetail(id)}`, data);
    }

    deletePublicite(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}${apiRoutes.publiciteApp.publiciteDetail(id)}`);
    }
}
