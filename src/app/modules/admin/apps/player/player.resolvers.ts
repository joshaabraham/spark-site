import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerService } from '../player/player.services';
import { Player } from './player.types';


@Injectable({
    providedIn: 'root'
})
export class PlayersResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _playerService: PlayerService)
    {
    }

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Player[]>
    {
        return this._playerService.getPlayers();
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
    constructor(private _playerService: PlayerService)
    {
    }

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Player>
    {
        return this._playerService.getPlayer(route.paramMap.get('id'));
    }
}
