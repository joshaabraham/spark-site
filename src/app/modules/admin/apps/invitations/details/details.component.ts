import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invitation } from 'app/modules/admin/apps/invitations/invitations.types';

@Component({
    selector: 'app-invitation-details',
    templateUrl: './details.component.html',
      encapsulation  : ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvitationDetailsComponent implements OnInit {
    invitation: Invitation;

    constructor(private _activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        // Get the resolved invitation from the route data
        this.invitation = this._activatedRoute.snapshot.data['invitation'];
    }
}
