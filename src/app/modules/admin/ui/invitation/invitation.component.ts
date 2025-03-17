import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarModalComponent } from './dialogsInvitations/calendar-modal/calendar-modal.component';
import { fuseAnimations } from '@fuse/animations';
import { Invitation } from 'app/modules/admin/apps/invitations/invitations.types';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class SportInvitationComponent implements OnInit{
  
  @Input() invitation: Invitation;

  constructor(private dialog: MatDialog) {}

  
  ngOnInit(): void {
console.log(this.invitation);
  }

  openProfile(side: string): void {
    // this.dialog.open(ProfileModalComponent, {
    //   data: { side }
    // });
  }

  openModify(): void {
    // this.dialog.open(ModifyModalComponent);
  }

  openAccept(): void {
    // this.dialog.open(AcceptModalComponent);
  }

  openModal(dot: string): void {
    // if (dot === 'map') {
    //   this.dialog.open(MapModalComponent);
    // }
    if (dot === 'calendar') {
      this.dialog.open(CalendarModalComponent);
    }
  }
}
