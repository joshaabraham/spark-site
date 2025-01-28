export interface Sport {
    id: string;
    name: string;
}

export interface Team {
    id: string;
    name: string;
    sport: Sport;
    city: string;
    stadiumName?: string;
    foundedDate?: Date;
    coachName?: string;
    ownerName?: string;
    teamLogo?: string;
    isActive: boolean;
    championshipsWon: number;
    website?: string;
    socialMedia: Record<string, string>;
    budget: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface TeamHistory {
    id: string;
    team: Team;
    season: string;
    leaguePosition?: number;
    totalMatches: number;
    totalWins: number;
    totalDraws: number;
    totalLosses: number;
    goalsScored: number;
    goalsConceded: number;
}

export interface Match {
    id: string;
    homeTeam: Team;
    awayTeam: Team;
    date: Date;
    location: string;
    scoreHome?: number;
    scoreAway?: number;
    isFinished: boolean;
    events: Array<{ minute: number; type: string; player: string }>;
}

export interface Sponsorship {
    id: string;
    team: Team;
    sponsorName: string;
    sponsorshipAmount: number;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
}

export interface FinancialRecord {
    id: string;
    team: Team;
    date: Date;
    description: string;
    amount: number;
    isIncome: boolean;
}
