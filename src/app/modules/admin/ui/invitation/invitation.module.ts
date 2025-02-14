import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps';
import { SportInvitationComponent } from './invitation.component';
import { CalendarModalComponent } from './dialogsInvitations/calendar-modal/calendar-modal.component';
import { ChatDialogComponent } from './dialogsInvitations/chat-dialog/chat-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SportInvitationComponent,
        CalendarModalComponent,
        ChatDialogComponent,

    ],
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        GoogleMapsModule
    ],
    exports: [
        SportInvitationComponent,
        CalendarModalComponent,
        ChatDialogComponent
        ],
})
export class InvitationModule { }
