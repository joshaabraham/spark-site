// export interface Contact
// {
//     id: number;
//     avatar?: string | null;
//     background?: string | null;
//     name: string;
//     emails?: {
//         email: string;
//         label: string;
//     }[];
//     phoneNumbers?: {
//         country: string;
//         phoneNumber: string;
//         label: string;
//     }[];
//     title?: string;
//     job?: string;
//     company?: string;
//     birthday?: string | null;
//     address?: string | null;
//     notes?: string | null;
//     tags: string[];
// }

import { User } from "app/core/user/user.types";
import { UserProfile } from "app/mock-api/apps/profileUser/api.service.ts";

// export interface Country
// {
//     id: string;
//     iso: string;
//     name: string;
//     code: string;
//     flagImagePos: string;
// }


export interface Contacts {
    userFrom: Contact; // Assuming user ID is a string
    userTo: Contact; // Assuming user ID is a string
    created: Date;
}

export interface Contact {
    user: UserProfile; // Assuming user ID is a string
    created: Date;
}