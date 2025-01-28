import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiRoutes } from 'src/app/dataService/routes';
import { Team } from './equipe.types';

@Injectable({
    providedIn: 'root'
})
export class EquipeService {
    private apiUrl = environment.apiURL;

    constructor(private http: HttpClient) {}

    /**
     * Get the list of teams
     */
    getTeams(): Observable<Team[]> {
        return this.http.get<Team[]>(`${this.apiUrl}${apiRoutes.equipeApp.teamsCreateList}`);
    }

    /**
     * Get the details of a team by ID
     *
     * @param id
     */
    getTeamById(id: string): Observable<Team> {
        return this.http.get<Team>(`${this.apiUrl}${apiRoutes.equipeApp.teamDetail(id)}`);
    }

    /**
     * Update a team by ID
     *
     * @param id
     * @param team
     */
    updateTeam(id: string, team: Team): Observable<Team> {
        return this.http.put<Team>(`${this.apiUrl}${apiRoutes.equipeApp.teamDetail(id)}`, team);
    }

    /**
     * Delete a team by ID
     *
     * @param id
     */
    deleteTeam(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}${apiRoutes.equipeApp.teamDetail(id)}`);
    }
}