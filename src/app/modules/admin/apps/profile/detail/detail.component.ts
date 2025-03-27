import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'; // Import du service
import { UserProfile } from '../profile.type'; // Import du type UserProfile

@Component({
  selector: 'app-profile-detail',
  templateUrl: './detail.component.html',
})
export class ProfileDetailComponent implements OnInit {
  isCurrentUser: boolean = false; // Indique si le profil affiché est celui de l'utilisateur connecté
  isInContacts: boolean = false; // Indique si le profil est déjà dans la liste des contacts
  profile: UserProfile | null = null; // Stocke les détails du profil

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    // Appel au backend pour récupérer les détails du profil
    this.profileService.getProfileById(1).subscribe(
      (profile: UserProfile) => {
        this.profile = profile;

        // Exemple de logique pour déterminer si le profil est celui de l'utilisateur connecté
        const currentUserId = '1'; // ID de l'utilisateur connecté (exemple)
        this.isCurrentUser = currentUserId === profile.user;

        // Exemple de logique pour vérifier si le profil est déjà dans les contacts
        this.isInContacts = profile.tags?.some(tag => tag.title === 'contact') || false;
      },
      (error) => {
        console.error('Erreur lors de la récupération du profil :', error);
      }
    );
  }

  addToContacts(): void {
    // Logique pour ajouter le profil à la liste des contacts
    console.log('Profil ajouté aux contacts');
  }
}
