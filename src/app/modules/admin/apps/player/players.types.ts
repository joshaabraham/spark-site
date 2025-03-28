import { User } from 'app/core/user/user.types';
import { Sport } from '../sports/sports.types';

export interface Player {
    id: string;
    user: User; // Utilisateur associé au joueur
    phoneNumber?: string; // Numéro de téléphone
    dateOfBirth?: Date; // Date de naissance
    gender: 'M' | 'F' | 'O'; // Genre : Male, Female, Other
    height?: number; // Taille en mètres
    weight?: number; // Poids en kilogrammes
    bio?: string; // Biographie
    profilePicture?: string; // URL de la photo de profil
    sport: Sport; // Sport principal (relation ForeignKey)
    team?: Team; // Équipe associée (relation ForeignKey)
    position?: 'GK' | 'DEF' | 'MID' | 'FWD' | 'OTH'; // Position : Goalkeeper, Defender, Midfielder, Forward, Other
    level?: 'TB' | 'BEG' | 'INT' | 'ADV' | 'EXP' | 'PRO' | 'ELI' | 'WOC' | 'LEG' | 'GDL'; // Niveau : Beginner à Godlike
    frequence?: 'OCC' | 'REG' | 'INT' | 'PRO' | 'OTH'; // Fréquence de pratique : Occasionnel à Professionnel
    achievements?: string; // Réalisations notables
    isActive: boolean; // Statut actif
    createdAt: Date; // Date de création
    updatedAt: Date; // Date de mise à jour
    niveau: number; // Niveau du joueur (0 à 10)
}

// export interface User {
//     id: string;
//     firstName: string;
//     lastName: string;
//     email: string;
// }

// export interface Sport {
//     id: string;
//     name: string;
// }

export interface Team {
    id: string;
    name: string;
    sport: Sport;
}
