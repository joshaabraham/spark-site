import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SportInvitationComponent } from './invitation.component';
import { CalendarModalComponent } from './dialogsInvitations/calendar-modal/calendar-modal.component';
import { ChatDialogComponent } from './dialogsInvitations/chat-dialog/chat-dialog.component';
import { FormsModule } from '@angular/forms';
import { MapDialogComponent } from './dialogsInvitations/map-dialog/map-dialog.component';

@NgModule({
    declarations: [
        SportInvitationComponent,
        CalendarModalComponent,
        ChatDialogComponent,
        MapDialogComponent

    ],
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [
        SportInvitationComponent,
        CalendarModalComponent,
        ChatDialogComponent,
        MapDialogComponent
        ],
})
export class InvitationModule { }
