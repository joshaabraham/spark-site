export interface Player {
    id: string;
    user: User;
    phoneNumber?: string;
    dateOfBirth?: Date;
    gender: 'M' | 'F' | 'O';
    height?: number;
    weight?: number;
    bio?: string;
    profilePicture?: string;
    sports: Sport[];
    team?: Team;
    position?: 'GK' | 'DEF' | 'MID' | 'FWD' | 'OTH';
    achievements?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    niveau: string;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface Sport {
    id: string;
    name: string;
}

export interface Team {
    id: string;
    name: string;
    sport: Sport;
}
