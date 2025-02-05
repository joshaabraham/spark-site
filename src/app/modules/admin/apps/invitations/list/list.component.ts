import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invitation } from 'app/modules/admin/apps/invitations/invitations.types';

@Component({
    selector: 'app-invitation-list',
    templateUrl: './list.component.html',
      encapsulation  : ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvitationsListComponent implements OnInit {
    invitations: Invitation[];

    constructor(private _activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        // Get the resolved invitations from the route data
        this.invitations = this._activatedRoute.snapshot.data['invitations'];
    }
}
