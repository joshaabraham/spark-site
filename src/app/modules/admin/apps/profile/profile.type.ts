
export interface UserProfile {
    id?: number;
    user: string; // Assuming user ID is a string
    emails: Emails[];
    avatar?: string;
    background?: string;
    name: string;
    title?: string;
    job?: string;
    company?: string;
    birthday?: string;
    address?: string;
    phoneNumbers?: PhoneNumbers[];
    notes?: string;
    tags?: Tag[];
    website?: string;
    isPrivate: boolean;
    followersCount?: number;
    followingCount?: number;
    friendsCount?: number;
    postsCount?: number;
    albumsChoto?: string[]; // Assuming album IDs are strings
    about?: string;
    attachments?: Attachments;
    createdAt?: string;
    updatedAt?: string;
  }

  export interface  Attachments{
            media?: any[];
            docs?: any[];
            links?: any[];
        };

  export interface PhoneNumbers {
      country: string;
      phoneNumber: string;
      label: string;
  }

  export interface Tag
  {
      id?: string;
      title?: string;
  }

  export interface Emails {
            email: string;
            label: string;
        }

  export interface Country
  {
      id: string;
      iso: string;
      name: string;
      code: string;
      flagImagePos: string;
  }
