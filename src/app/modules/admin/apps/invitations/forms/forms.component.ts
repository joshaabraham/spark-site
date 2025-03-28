import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvitationStatus, Invitation } from '../invitations.types';
import { Sport } from '../../sports/sports.types';
import { Player } from '../../player/players.types';
import { SportsStateManager } from 'app/dataService/stateManager/sports.state.manager'; // Import du SportsStateManager

@Component({
  selector: 'app-invitation-form',
  templateUrl: './forms.component.html',
})
export class FormsDisponbiliteComponent implements OnInit {
  invitationForm: FormGroup;
  sports: Sport[] = []; // Liste des sports sélectionnés par l'utilisateur
  players: Player[] = []; // Liste des joueurs (à remplir via un service)
  invitationStatuses = Object.values(InvitationStatus); // Liste des statuts d'invitation

  constructor(
    private fb: FormBuilder,
    private sportsStateManager: SportsStateManager // Injection du SportsStateManager
  ) {}

  ngOnInit(): void {
    // Initialisation du formulaire
    this.invitationForm = this.fb.group({
      generalInfo: this.fb.group({
        sport: [null, Validators.required],
        playerA: [null, Validators.required],
        playerB: [null, Validators.required],
      }),
      datesAndLocations: this.fb.group({
        invitationDate: [null, Validators.required],
        expiryDate: [null],
        proposedLocation: [null],
      }),
      statusAndMessage: this.fb.group({
        status: [null, Validators.required],
        message: [''],
      }),
    });

    // Récupération des sports sélectionnés via le SportsStateManager
    this.sportsStateManager.selectedSports$.subscribe((selectedSports: Sport[]) => {
      this.sports = selectedSports;
    });

    // Exemple de chargement des joueurs (remplacez par des appels à un service)
    // this.players = [
    //   { id: '1', spTitreFr: 'John Doe' },
    //   { id: '2', spTitreFr: 'Jane Smith' },
    // ];
  }

  onSubmit(): void {
    if (this.invitationForm.valid) {
      const invitation: Invitation = this.invitationForm.value;
      console.log('Invitation créée :', invitation);
      // Ajoutez ici la logique pour envoyer l'invitation au backend
    }
  }
}
