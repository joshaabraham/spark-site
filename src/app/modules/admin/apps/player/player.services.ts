import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { apiRoutes } from '../../../../dataService/routes';
import { Player } from './player.types';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    private apiUrl = environment.apiURL;

    constructor(private http: HttpClient) {}

    /**
     * Get the list of players
     */
    getPlayers(): Observable<Player[]> {
        return this.http.get<Player[]>(`${this.apiUrl}${apiRoutes.equipeApp.teamsCreateList}`);
    }

    /**
     * Get the details of a player by ID
     *
     * @param id
     */
    getPlayerById(id: string): Observable<Player> {
        return this.http.get<Player>(`${this.apiUrl}${apiRoutes.equipeApp.teamDetail(id)}`);
    }

    /**
     * Create a new player
     *
     * @param player
     */
    createPlayer(player: Player): Observable<Player> {
        return this.http.post<Player>(`${this.apiUrl}${apiRoutes.equipeApp.teamsCreateList}`, player);
    }

    /**
     * Update a player by ID
     *
     * @param id
     * @param player
     */
    updatePlayer(id: string, player: Player): Observable<Player> {
        return this.http.put<Player>(`${this.apiUrl}${apiRoutes.equipeApp.teamDetail(id)}`, player);
    }

    /**
     * Delete a player by ID
     *
     * @param id
     */
    deletePlayer(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}${apiRoutes.equipeApp.teamDetail(id)}`);
    }

    /**
     * Get the details of a player by ID
     *
     * @param id
     */
     getPlayer(id: string): Observable<Player> {
        return this.http.get<Player>(`${this.apiUrl}${apiRoutes.equipeApp.teamDetail(id)}`);
    }
}
