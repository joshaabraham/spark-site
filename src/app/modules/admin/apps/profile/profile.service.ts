import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiRoutes } from 'app/dataService/routes';
import { environment } from 'environments/environment';
import { UserProfile } from './profile.type';


@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor(private _httpClient: HttpClient) {}

    // Profiles CRUD operations
    getProfiles(): Observable<UserProfile[]> {
        return this._httpClient.get<UserProfile[]>(`${environment.apiURL}${apiRoutes.profileApp.profilesCreateList}`);
    }

    getProfileById(id: number): Observable<UserProfile> {
        return this._httpClient.get<UserProfile>(`${environment.apiURL}${apiRoutes.profileApp.profileDetail(id)}`);
    }

    createProfile(profile: UserProfile): Observable<UserProfile> {
        return this._httpClient.post<UserProfile>(`${environment.apiURL}${apiRoutes.profileApp.profilesCreateList}`, profile);
    }

    updateProfile(id: number, profile: UserProfile): Observable<UserProfile> {
        return this._httpClient.put<UserProfile>(`${environment.apiURL}${apiRoutes.profileApp.profileDetail(id)}`, profile);
    }

    deleteProfile(id: number): Observable<boolean> {
        return this._httpClient.delete<boolean>(`${environment.apiURL}${apiRoutes.profileApp.profileDetail(id)}`);
    }
}
