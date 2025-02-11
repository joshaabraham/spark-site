import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MapModalComponent } from './map-modal/map-modal.component';
import { CalendarModalComponent } from './calendar-modal/calendar-modal.component';

@Component({
  selector: 'app-invitation-card',
  templateUrl: './invitation-card.component.html',
  styleUrls: ['./invitation-card.component.scss']
})
export class InvitationCardComponent {

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
    if (dot === 'map') {
      this.dialog.open(MapModalComponent);
    }
    if (dot === 'calendar') {
      this.dialog.open(CalendarModalComponent);
    }
  }
}
