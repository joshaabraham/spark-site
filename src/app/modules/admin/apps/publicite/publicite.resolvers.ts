import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PubliciteService } from './publicite.service';
import { CampagnePublicitaire, Publicite } from './publicite.types';

@Injectable({
    providedIn: 'root'
})
export class CampagnesResolver implements Resolve<CampagnePublicitaire[]> {
    constructor(private _publiciteService: PubliciteService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CampagnePublicitaire[]> {
        return this._publiciteService.getCampagnes();
    }
}

@Injectable({
    providedIn: 'root'
})
export class PublicitesResolver implements Resolve<Publicite[]> {
    constructor(private _publiciteService: PubliciteService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Publicite[]> {
        return this._publiciteService.getPublicites();
    }
}

@Injectable({
    providedIn: 'root'
})
export class CampagneResolver implements Resolve<CampagnePublicitaire> {
    constructor(private _publiciteService: PubliciteService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CampagnePublicitaire> {
        const id = route.paramMap.get('id');
        return this._publiciteService.getCampagne(Number(id));
    }
}

@Injectable({
    providedIn: 'root'
})
export class PubliciteResolver implements Resolve<Publicite> {
    constructor(private _publiciteService: PubliciteService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Publicite> {
        const id = route.paramMap.get('id');
        return this._publiciteService.getPublicite(Number(id));
    }
}
