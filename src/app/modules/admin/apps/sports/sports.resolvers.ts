import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SportsService } from './sports.service';
import { Sport } from './sports.types';

@Injectable({
    providedIn: 'root'
})
export class SportsResolver implements Resolve<Sport[]>
{
    /**
     * Constructor
     */
    constructor(private _sportsService: SportsService) {}

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Sport[]>
    {
        return this._sportsService.getSports();
    }
}

@Injectable({
    providedIn: 'root'
})
export class SportResolver implements Resolve<Sport>
{
    /**
     * Constructor
     */
    constructor(private _sportsService: SportsService) {}

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Sport>
    {
        const sportId = Number(route.paramMap.get('id'));
        return this._sportsService.getSportById(sportId);
    }
}

@Injectable({
    providedIn: 'root'
})
export class SportsByCategoryResolver implements Resolve<Sport[]>
{
    /**
     * Constructor
     */
    constructor(private _sportsService: SportsService) {}

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Sport[]>
    {
        const category = route.paramMap.get('category');
        return this._sportsService.getSportsByCategory(category);
    }
}

@Injectable({
    providedIn: 'root'
})
export class SportByCodeResolver implements Resolve<Sport>
{
    /**
     * Constructor
     */
    constructor(private _sportsService: SportsService) {}

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Sport>
    {
        const code = route.paramMap.get('code');
        return this._sportsService.getSportByCode(code);
    }
}
