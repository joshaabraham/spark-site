import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiRoutes } from 'app/dataService/routes';
import { Invitation } from './invitations.types';
import { environment } from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class InvitationsService {
    private apiUrl = environment.apiURL;

    constructor(private _httpClient: HttpClient) {}

    // Invitations CRUD operations
    getInvitations(): Observable<Invitation[]> {
        return this._httpClient.get<Invitation[]>(`${this.apiUrl}${apiRoutes.invitationApp.invitationCreateList}`);
    }

    getInvitationById(id: number): Observable<Invitation> {
        return this._httpClient.get<Invitation>(`${this.apiUrl}${apiRoutes.invitationApp.invitationDetail(id)}`);
    }

    createInvitation(invitation: Invitation): Observable<Invitation> {
        return this._httpClient.post<Invitation>(`${this.apiUrl}${apiRoutes.invitationApp.invitationCreateList}`, invitation);
    }

    updateInvitation(id: number, invitation: Invitation): Observable<Invitation> {
        return this._httpClient.put<Invitation>(`${this.apiUrl}${apiRoutes.invitationApp.invitationDetail(id)}`, invitation);
    }

    deleteInvitation(id: number): Observable<boolean> {
        return this._httpClient.delete<boolean>(`${this.apiUrl}${apiRoutes.invitationApp.invitationDetail(id)}`);
    }
}
