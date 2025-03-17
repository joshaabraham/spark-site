import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Invitation, ProposedDate, InvitationNote } from './invitations.types';
import { InvitationsService } from './invitations.service';

@Injectable({
    providedIn: 'root'
})
export class InvitationsResolver implements Resolve<Invitation[]>
{
    constructor(private _invitationsService: InvitationsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Invitation[]> {
        return this._invitationsService.getInvitations().pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class InvitationResolver implements Resolve<Invitation>
{
    constructor(private _invitationsService: InvitationsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Invitation> {
        const id = route.paramMap.get('id');
        return this._invitationsService.getInvitation(Number(id)).pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class ProposedDatesResolver implements Resolve<ProposedDate[]>
{
    constructor(private _invitationsService: InvitationsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProposedDate[]> {
        return this._invitationsService.getProposedDates().pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class ProposedDateResolver implements Resolve<ProposedDate>
{
    constructor(private _invitationsService: InvitationsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProposedDate> {
        const id = route.paramMap.get('id');
        return this._invitationsService.getProposedDate(Number(id)).pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class InvitationNotesResolver implements Resolve<InvitationNote[]>
{
    constructor(private _invitationsService: InvitationsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<InvitationNote[]> {
        return this._invitationsService.getInvitationNotes().pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class InvitationNoteResolver implements Resolve<InvitationNote>
{
    constructor(private _invitationsService: InvitationsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<InvitationNote> {
        const id = route.paramMap.get('id');
        return this._invitationsService.getInvitationNote(Number(id)).pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}
