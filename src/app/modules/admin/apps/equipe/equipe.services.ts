import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { apiRoutes } from '../../../../dataService/routes';
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

    /**
     * Get teams by sport ID
     *
     * @param sportId
     */
 getTeamsBySport(sportId: string): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiUrl}${apiRoutes.equipeApp.teamsBySport(sportId)}`);
}

/**
 * Get teams by sponsorship ID
 *
 * @param sponsorshipId
 */
getTeamsBySponsorship(sponsorshipId: string): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiUrl}${apiRoutes.equipeApp.teamsBySponsorship(sponsorshipId)}`);
}

/**
 * Get teams by financial record ID
 *
 * @param financialRecordId
 */
getTeamsByFinancialRecord(financialRecordId: string): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiUrl}${apiRoutes.equipeApp.teamsByFinancialRecord(financialRecordId)}`);
}

/**
 * Get teams by team history ID
 *
 * @param teamHistoryId
 */
getTeamsByTeamHistory(teamHistoryId: string): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiUrl}${apiRoutes.equipeApp.teamsByTeamHistory(teamHistoryId)}`);
}

/**
 * Get teams by match ID
 *
 * @param matchId
 */
getTeamsByMatch(matchId: string): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiUrl}${apiRoutes.equipeApp.teamsByMatch(matchId)}`);
}

}
