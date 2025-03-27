import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './detail.component.html',
})
export class ProfileDetailComponent implements OnInit {
  isCurrentUser: boolean = false; // Indique si le profil affiché est celui de l'utilisateur connecté
  isInContacts: boolean = false; // Indique si le profil est déjà dans la liste des contacts

  constructor() {}

  ngOnInit(): void {
    // Exemple de logique pour déterminer si le profil est celui de l'utilisateur connecté
    // et s'il est déjà dans la liste des contacts
    const currentUserId: number = 1; // ID de l'utilisateur connecté (exemple)
    const profileId: number = 2; // ID du profil affiché (exemple)

    this.isCurrentUser = currentUserId === profileId;
    this.isInContacts = false; // Remplacez par une vérification réelle
  }

  addToContacts(): void {
    // Logique pour ajouter le profil à la liste des contacts
    console.log('Profil ajouté aux contacts');
  }
}
