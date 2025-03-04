import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InvitationsService } from '../invitations.service';
import { Invitation } from '../invitations.types';

@Component({
  selector: 'app-invitations-list',
  templateUrl: './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvitationsListComponent implements OnInit {
  invitations: Invitation[];

  constructor(private invitationsService: InvitationsService) {}

  ngOnInit(): void {
    this.invitationsService.getInvitations().subscribe((invitations) => {
      this.invitations = invitations;
    });
  }
}
