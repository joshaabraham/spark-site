import { Injectable } from '@angular/core';
import { Player } from 'app/modules/admin/apps/player/players.types';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class PlayersStateManager {
    private _players: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([]);

    /**
     * Observable pour les joueurs
     */
    get players$(): Observable<Player[]> {
        return this._players.asObservable();
    }

    /**
     * Récupère la liste actuelle des joueurs
     */
    get players(): Player[] {
        return this._players.value;
    }

    /**
     * Définit la liste des joueurs
     *
     * @param players
     */
    setPlayers(players: Player[]): void {
        this._players.next(players);
    }

    /**
     * Ajoute un joueur à la liste
     *
     * @param player
     */
    addPlayer(player: Player): void {
        this._players.next([...this._players.value, player]);
    }

    /**
     * Supprime un joueur de la liste
     *
     * @param playerId
     */
    removePlayer(playerId: number): void {
        this._players.next(this._players.value.filter(player => player.id !== playerId.toString()));
    }
}
