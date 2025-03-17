import { Address } from 'app/core/models/address.model';
import { Player } from '../player/player.types';
import { Sport } from '../sports/sports.types';

export interface ProposedDate {
    id?: number;
    date: string;  // Date proposée au format ISO
    timeSlot: string;  // Créneau horaire
    isPreferred: boolean;  // Indique si la date est privilégiée
}

export enum InvitationStatus {
    pending = 'Pending',
    accepted = 'Accepted',
    declined = 'Declined',
    cancelled = 'Cancelled',
    expired = 'Expired'
}

// export interface Player {
//     id: number;
//     name: string;

// }

// export interface Sport {
//     id: number;
//     name: string;

// }

// export interface Address {
//     id: number;
//     addressLine: string;
//     city: string;

// }

export interface Invitation {
    id?: number;
    playerA: Player;  // Joueur A (envoyeur)
    playerB: Player;  // Joueur B (destinataire)
    sport: Sport;  // Sport pratiqué
    invitationDate: string;  // Date d'envoi au format ISO
    expiryDate?: string;  // Date d'expiration au format ISO
    responseDate?: string;  // Date de réponse au format ISO
    status: InvitationStatus;  // Statut de l'invitation
    message?: string;  // Message personnalisé
    proposedLocation?: Address;  // Lieu proposé
    alternativeLocations?: Address[];  // Lieux alternatifs
    proposedDates?: ProposedDate[];  // Dates proposées
    confirmedDate?: string;  // Date confirmée au format ISO
    confirmedLocation?: Address;  // Lieu confirmé
    hasPlayersMetBefore: boolean;  // Indique si les joueurs se sont rencontrés
    invitationNotes?: InvitationNote[];  // Notes associées à l'invitation
}

export interface InvitationNote {
    id?: number;
    invitation: Invitation;
    note: string;  // Contenu de la note
    createdAt: string;  // Date de création au format ISO
}
