// import { Address } from './address.model';
// import { Sport } from './sport.model';
// import { Team } from './team.model';
// import { Player } from './player.model';

import { Address } from 'app/core/models/address.model';
import { Team } from '../equipe/equipe.types';
import { Player } from '../player/player.types';
import { Sport } from '../sports/sports.types';


export interface Sponsor {
id?: number;
name: string;
industry: string;
contributionAmount: number;
logoUrl?: string;
}

export interface MediaCoverage {
id?: number;
mediaOutlet: string;
coverageType: string;
coverageDetails?: string;
coverageDate: Date;
}


export interface Location {
id?: number;
name: string;
address?: Address;
}


export interface Match {
id?: number;
matchDate: Date;
venue: Location;
teamA: Team;
teamB: Team;
result?: string;
keyPlayers: Player[];
}


export interface SportEvent {
id?: number;
name: string;
location: string;
adresse?: Address;
startDate: Date;
endDate: Date;
organizer: string;
othersports: Sport[];
sport: Sport;
participatingTeams: Team[];
notablePlayers: Player[];
description?: string;
estimatedAudience: number;
isRecurring: boolean;
recurrenceIntervalYears?: number;
matches: Match[];
sponsors: Sponsor[];
mediaCoverageDetails: MediaCoverage[];
}
