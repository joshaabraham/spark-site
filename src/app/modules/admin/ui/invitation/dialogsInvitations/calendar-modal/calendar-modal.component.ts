import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarModalComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<CalendarModalComponent>) {}

  ngOnInit(): void {

  }

  close(): void {
    this.dialogRef.close();
  }


}
