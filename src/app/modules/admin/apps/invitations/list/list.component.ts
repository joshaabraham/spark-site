import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
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

    constructor(private _invitationsService: InvitationsService) {}

    ngOnInit(): void {
        // Get the invitations from the service
        this._invitationsService.getInvitations().subscribe((invitations: Invitation[]) => {
            this.invitations = invitations;
        });
    }
}
