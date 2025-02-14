import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarModalComponent } from './dialogsInvitations/calendar-modal/calendar-modal.component';
// import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';



@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class SportInvitationComponent {

  constructor(private dialog: MatDialog) {}

  openProfile(side: string): void {
    // this.dialog.open(ProfileModalComponent, {
    //   data: { side }
    // });
  }

  openModify(): void {
  //  this.dialog.open(ModifyModalComponent);
  }

  openAccept(): void {
  //  this.dialog.open(AcceptModalComponent);
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
