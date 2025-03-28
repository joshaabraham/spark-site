import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PlayerService } from './players.services';
import { Player } from './players.types';
import { PlayersStateManager } from 'app/dataService/stateManager/players.state.manager';


@Injectable({
    providedIn: 'root'
})
export class PlayersResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _playerService: PlayerService,
        private _playersStateManager: PlayersStateManager
    ) {}

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Player[]> {
        return this._playerService.getPlayers().pipe(
            tap((players: Player[]) => {
                // Stocke les joueurs dans le PlayersStateManager
                this._playersStateManager.setPlayers(players);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class PlayerResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _playerService: PlayerService) {}

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Player> {
        return this._playerService.getPlayerById(Number(route.paramMap.get('id')));
    }
}
