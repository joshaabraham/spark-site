import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';
import { AvailabilityDialogComponent } from './dialogsInvitations/availability-dialog/availability-dialog.component';
import { MapDialogComponent } from './dialogsInvitations/map-dialog/map-dialog.component';
import { ChatDialogComponent } from './dialogsInvitations/chat-dialog/chat-dialog.component';


@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class SportInvitationComponent {
    @Input() isSender: boolean = false;  // Défini si l'utilisateur courant est l'expéditeur
    @Input() isReceiver: boolean = false;  // Défini si l'utilisateur courant est le destinataire
  
    senderLevel = 4.5;  // Niveau de l'expéditeur
    receiverLevel = 3.8;  // Niveau du destinataire
  
    constructor(public dialog: MatDialog) {}
  
    // openProfileDialog(userType: string): void {
    //   this.dialog.open(ProfileDialogComponent, {
    //     data: { userType }
    //   });
    // }
  
    openAvailabilityDialog(): void {
      this.dialog.open(AvailabilityDialogComponent);
    }
  
    openMapDialog(): void {
      this.dialog.open(MapDialogComponent);
    }
  
    openChatDialog(): void {
      this.dialog.open(ChatDialogComponent);
    }
  
    // Logique pour accepter l'invitation
    acceptInvitation(): void {
      console.log('Invitation acceptée par le destinataire');
      // Implémentez la logique pour accepter l'invitation (ex. mise à jour du backend)
    }
  
    // Logique pour retirer l'invitation
    removeInvitation(): void {
      console.log('Invitation retirée par l\'expéditeur');
      // Implémentez la logique pour retirer l'invitation (ex. suppression du backend)
    }
  }