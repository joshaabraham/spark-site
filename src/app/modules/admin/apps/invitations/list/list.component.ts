import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InvitationsService } from 'app/modules/admin/apps/invitations/invitations.service';
import { Invitation } from 'app/modules/admin/apps/invitations/invitations.types';

@Component({
    selector: 'app-invitation-list',
    templateUrl: './list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvitationsListComponent implements OnInit {

    public invitations: Invitation[];

    constructor(private _invitationsService: InvitationsService, private router: Router) {}

    ngOnInit(): void {
        // Get the invitations from the service
        this._invitationsService.getInvitations().subscribe((invitations: Invitation[]) => {
            this.invitations = invitations;
        });
    }


    creerUneDisponibilite(): void {
        this.router.navigate(['apps/invitations/createDisponiblite']);
    }
}
