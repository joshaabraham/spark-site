import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EquipeService } from './equipe.services';
import { Team} from './equipe.types';


@Injectable({
    providedIn: 'root'
})
export class EquipesResolver implements Resolve<any>
{
    constructor(private _equipeService: EquipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team[]>
    {
        return this._equipeService.getTeams();
    }
}

@Injectable({
    providedIn: 'root'
})
export class EquipeResolver implements Resolve<any>
{
    constructor(private _equipeService: EquipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team>
    {
        return this._equipeService.getTeamById(route.paramMap.get('id'));
    }
}

@Injectable({
    providedIn: 'root'
})
export class TeamsBySportResolver implements Resolve<any>
{
    constructor(private _equipeService: EquipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team[]>
    {
        const sportId = route.paramMap.get('sportId');
        return this._equipeService.getTeamsBySport(sportId);
    }
}

@Injectable({
    providedIn: 'root'
})
export class TeamsBySponsorshipResolver implements Resolve<any>
{
    constructor(private _equipeService: EquipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team[]>
    {
        const sponsorshipId = route.paramMap.get('sponsorshipId');
        return this._equipeService.getTeamsBySponsorship(sponsorshipId);
    }
}

@Injectable({
    providedIn: 'root'
})
export class TeamsByFinancialRecordResolver implements Resolve<any>
{
    constructor(private _equipeService: EquipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team[]>
    {
        const financialRecordId = route.paramMap.get('financialRecordId');
        return this._equipeService.getTeamsByFinancialRecord(financialRecordId);
    }
}

@Injectable({
    providedIn: 'root'
})
export class TeamsByTeamHistoryResolver implements Resolve<any>
{
    constructor(private _equipeService: EquipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team[]>
    {
        const teamHistoryId = route.paramMap.get('teamHistoryId');
        return this._equipeService.getTeamsByTeamHistory(teamHistoryId);
    }
}

@Injectable({
    providedIn: 'root'
})
export class TeamsByMatchResolver implements Resolve<any>
{
    constructor(private _equipeService: EquipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team[]>
    {
        const matchId = route.paramMap.get('matchId');
        return this._equipeService.getTeamsByMatch(matchId);
    }
}
