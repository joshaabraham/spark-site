import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {Routes} from '../routes-definition/routes'


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
  is_private: boolean;
  followers_count?: number;
  following_count?: number;
  friends_count?: number;
  posts_count?: number;
  albums_photo?: string[]; // Assuming album IDs are strings
  about?: string;
  Attachments?: Attachments;
  created_at?: string;
  updated_at?: string;
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
      }[];

export interface Country
{
    id: string;
    iso: string;
    name: string;
    code: string;
    flagImagePos: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private apiUrl = `${environment.apiURL}`; // URL de base pour l'API Django
  private profileRoutes_GET_POST = `${Routes.POST_GET_PROFILE_USER}`; 
  private profileRoutes_UDR = `${Routes.UPDATE_DELETE_RETRIEVE_PROFILE_USER}`; 

  constructor(private http: HttpClient) { }

  // Récupérer tous les profils
  getUserProfiles(): Observable<UserProfile[]> {
    console.log(`${this.apiUrl}${this.profileRoutes_GET_POST}`);
    return this.http.get<UserProfile[]>(`${this.apiUrl}${this.profileRoutes_GET_POST}`);
  }

  // Récupérer un profil par ID
  getUserProfile(id: number): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}${this.profileRoutes_UDR}${id}/`);
  }

  // Créer un nouveau profil
  createUserProfile(profile: UserProfile): Observable<UserProfile> {
    return this.http.post<UserProfile>(`${this.apiUrl}${this.profileRoutes_GET_POST}`, profile, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Mettre à jour un profil existant
  updateUserProfile(id: number, profile: UserProfile): Observable<UserProfile> {
    return this.http.put<UserProfile>(`${this.apiUrl}${this.profileRoutes_UDR}${id}/`, profile, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Supprimer un profil
  deleteUserProfile(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${this.profileRoutes_UDR}${id}/`);
  }
}
