import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiRoutes } from 'app/dataService/routes';
import { Invitation, ProposedDate, InvitationNote } from './invitations.types';
import { environment } from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class InvitationsService {
    private apiUrl = environment.apiURL;

    constructor(private _httpClient: HttpClient) {}

    // Proposed Dates
    getProposedDates(): Observable<ProposedDate[]> {
        return this._httpClient.get<ProposedDate[]>(`${this.apiUrl}${apiRoutes.invitationApp.proposedDatesCreateList}`);
    }

    getProposedDate(id: number): Observable<ProposedDate> {
        return this._httpClient.get<ProposedDate>(`${this.apiUrl}${apiRoutes.invitationApp.proposedDateDetail(id)}`);
    }


    // Invitations
    getInvitations(): Observable<Invitation[]> {
        return this._httpClient.get<Invitation[]>(`${this.apiUrl}${apiRoutes.invitationApp.invitationCreateList}`);
    }

    getInvitation(id: number): Observable<Invitation> {
        return this._httpClient.get<Invitation>(`${this.apiUrl}${apiRoutes.invitationApp.invitationDetail(id)}`);
    }

    createInvitation(invitation: Invitation): Observable<Invitation> {
        return this._httpClient.post<Invitation>(`${this.apiUrl}${apiRoutes.invitationApp.invitationCreateList}`, invitation);
    }

    // Invitation Notes
    // Removed duplicate implementation of getInvitationNotes

    getInvitationNote(id: number): Observable<InvitationNote> {
        return this._httpClient.get<InvitationNote>(`${this.apiUrl}${apiRoutes.invitationApp.invitationNoteDetail(id)}`);
    }

    // Proposed Dates CRUD operations
    // Removed duplicate implementation of getProposedDates

    getProposedDateById(id: number): Observable<ProposedDate> {
        return this._httpClient.get<ProposedDate>(`${this.apiUrl}${apiRoutes.invitationApp.proposedDateDetail(id)}`);
    }

    createProposedDate(proposedDate: ProposedDate): Observable<ProposedDate> {
        return this._httpClient.post<ProposedDate>(`${this.apiUrl}${apiRoutes.invitationApp.proposedDatesCreateList}`, proposedDate);
    }

    updateProposedDate(id: number, proposedDate: ProposedDate): Observable<ProposedDate> {
        return this._httpClient.put<ProposedDate>(`${this.apiUrl}${apiRoutes.invitationApp.proposedDateDetail(id)}`, proposedDate);
    }

    deleteProposedDate(id: number): Observable<boolean> {
        return this._httpClient.delete<boolean>(`${this.apiUrl}${apiRoutes.invitationApp.proposedDateDetail(id)}`);
    }

    // Invitation Notes CRUD operations
    getInvitationNotes(): Observable<InvitationNote[]> {
        return this._httpClient.get<InvitationNote[]>(`${this.apiUrl}${apiRoutes.invitationApp.invitationNotesCreateList}`);
    }

    getInvitationNoteById(id: number): Observable<InvitationNote> {
        return this._httpClient.get<InvitationNote>(`${this.apiUrl}${apiRoutes.invitationApp.invitationNoteDetail(id)}`);
    }

    createInvitationNote(invitationNote: InvitationNote): Observable<InvitationNote> {
        return this._httpClient.post<InvitationNote>(`${this.apiUrl}${apiRoutes.invitationApp.invitationNotesCreateList}`, invitationNote);
    }

    updateInvitationNote(id: number, invitationNote: InvitationNote): Observable<InvitationNote> {
        return this._httpClient.put<InvitationNote>(`${this.apiUrl}${apiRoutes.invitationApp.invitationNoteDetail(id)}`, invitationNote);
    }

    deleteInvitationNote(id: number): Observable<boolean> {
        return this._httpClient.delete<boolean>(`${this.apiUrl}${apiRoutes.invitationApp.invitationNoteDetail(id)}`);
    }
}
