import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Invitation } from './invitations.types';
import { InvitationsService } from './invitations.service';

@Injectable({
    providedIn: 'root'
})
export class InvitationsResolver implements Resolve<Invitation[]>
{
    constructor(private _invitationsService: InvitationsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Invitation[]>
    {
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

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Invitation>
    {
        const id = route.paramMap.get('id');
        return this._invitationsService.getInvitationById(Number(id)).pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}
