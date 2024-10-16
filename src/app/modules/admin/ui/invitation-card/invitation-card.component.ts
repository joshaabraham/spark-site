import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sport-card',
  templateUrl: './sport-card.component.html',
  styleUrls: ['./sport-card.component.scss']
})
export class SportCardComponent {

  constructor(private dialog: MatDialog) {}

  openProfile(side: string) {
    this.dialog.open(ProfileModalComponent, {
      data: { side }
    });
  }

  openModify() {
    this.dialog.open(ModifyModalComponent);
  }

  openAccept() {
    this.dialog.open(AcceptModalComponent);
  }

  openModal(dot: string) {
    this.dialog.open(DotModalComponent, {
      data: { dot }
    });
  }
}
