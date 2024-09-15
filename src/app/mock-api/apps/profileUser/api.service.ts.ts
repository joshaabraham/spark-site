import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {Routes} from '../routes-definition/routes'


export interface UserProfile {
  id?: number;
  bio: string;
  location: string;
  birth_date: string;
  profile_image?: string;
  cover_image?: string;
  website?: string;
  is_private: boolean;
  posts_count?: number;
  followers_count?: number;
  following_count?: number;
  friends_count?: number;
  date_joined?: string;
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
