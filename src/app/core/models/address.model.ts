export interface Address {
    id?: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    latitude?: number;
    longitude?: number;
    additionalInfo?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
